/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-shadow */
import React, { CSSProperties, ReactNode } from 'react';
import Icon from '../icon';
import Overlay from '../overlay';
import {
  BaseComponent, BaseProps, BaseState, DivEvent,
} from '../common/base-component';

export type ImagePreviewProps = BaseProps<{
  /** 图片src */
  imgSrc: string;
  /** 图片原图src 有这个属性 全屏 的时候 显示 查看原图 按钮 */
  imgOriginalSrc: string;
  /** 图片alt */
  imgAlt: string;
  /** 图片样式 */
  imgStyle: CSSProperties;
  /** 图片样式 */
  imgClassName: string;
  /** 样式 */
  style: CSSProperties;
  /** 样式 */
  className: string;
  /** 是否开启点击图片 全屏 预览 */
  enableFullScreen: boolean;
  /** 全屏 预览 底部 */
  fullScreenFooter: ReactNode;
  /** 容器点击事件 */
  onClick: DivEvent['onClick'];
}>;

export type ImagePreviewState = BaseState<{
  status: 'loading' | 'success' | 'error';
  showFullScreen: boolean;
  imgOriginalSrc: string;
  fullScreenScale: number;
}>;

export default class ImagePreview extends BaseComponent<ImagePreviewProps, ImagePreviewState> {
  protected classPrefix = 'image-preview';

  private diff?: number;

  public constructor(props: ImagePreviewProps) {
    super(props);
    this.state = {
      status: 'loading',
      showFullScreen: false,
      imgOriginalSrc: '',
      fullScreenScale: 1,
    };
  }

  public componentDidUpdate(preProps: ImagePreviewProps) {
    if (preProps.imgSrc !== this.props.imgSrc) {
      this.setState({ status: 'loading', imgOriginalSrc: '' });
    }
  }

  protected view = () => {
    const {
      status, showFullScreen, fullScreenScale,
      imgOriginalSrc: stateImgOriginalSrc,
    } = this.state;
    const {
      imgSrc, imgAlt = '', imgStyle, imgClassName, fullScreenFooter, imgOriginalSrc,
      style = {}, className, enableFullScreen = false,
    } = this.props;

    return (
      <div
        style={style}
        onClick={this.onClick}
        className={this.classNames(className, this.getPrefixClass())}
      >
        <img
          alt={imgAlt}
          src={imgSrc}
          style={imgStyle}
          onLoad={this.onLoad}
          onError={this.onError}
          className={this.classNames(imgClassName, `img ${status}`)}
        />
        <div className={`overlay ${status}`}><Icon type="image" /></div>
        {status === 'error' && <div className={`overlay ${status}`}><Icon type="image-damage" /></div>}
        {enableFullScreen && (
          <Overlay
            style={{ backgroundColor: '#000', overflow: 'auto' }}
            visible={showFullScreen}
            onClick={this.closeOverlay}
            onTouchMove={this.overlayImgOnTouchMove}
            onTouchEnd={this.overlayImgOnTouchEnd}
          >
            <ImagePreview
              onClick={this.closeOverlay}
              style={{ width: '100%', transform: `scale(${fullScreenScale})` }}
              imgAlt={imgAlt}
              imgSrc={stateImgOriginalSrc === '' ? imgSrc : stateImgOriginalSrc}
            />
            {fullScreenFooter || (
              <div
                style={{
                  display: (imgOriginalSrc && stateImgOriginalSrc === '') ? 'unset' : 'none',
                  position: 'fixed',
                  backgroundColor: 'rgb(127, 127, 127)',
                  height: 36,
                  lineHeight: '36px',
                  color: '#fff',
                  borderRadius: 36,
                  fontSize: 12,
                  padding: '0 16px',
                  bottom: 45,
                }}
                onClick={this.switchOriginalImg}
              >
                查看原图
              </div>
            )}
          </Overlay>
        )}
      </div>
    );
  };

  private overlayImgOnTouchEnd: DivEvent['onTouchEnd'] = () => {
    this.diff = undefined;
  };

  private overlayImgOnTouchMove: DivEvent['onTouchMove'] = (event) => {
    const [one, two] = Object.values(event.touches);
    if (one && two) {
      const { clientX: oneX, clientY: oneY } = one;
      const { clientX: twoX, clientY: twoY } = two;
      const diff = Math.abs(twoX - oneX) + Math.abs(twoY - oneY);
      this.diff ??= diff;
      const scaleNum = diff - this.diff;
      this.setState(({ fullScreenScale }) => ({
        fullScreenScale: (() => {
          const scale = fullScreenScale! + scaleNum / 1000;
          if (scale <= 1) return 1;
          if (scale >= 5) return 5;
          return fullScreenScale! + scaleNum / 1000;
        })(),
      }));
    }
  };

  private switchOriginalImg: DivEvent['onClick'] = (event) => {
    event.stopPropagation();
    this.setState({
      imgOriginalSrc: this.props.imgOriginalSrc,
      fullScreenScale: 1,
    });
  };

  private closeOverlay: DivEvent['onClick'] = (event) => {
    event.stopPropagation();
    this.setState({
      showFullScreen: false,
      fullScreenScale: 1,
    });
  };

  private onClick: DivEvent['onClick'] = (event) => {
    event.stopPropagation();
    const { status } = this.state;
    const { onClick, enableFullScreen = false } = this.props;
    onClick?.(event);
    if (enableFullScreen && status === 'success') this.setState({ showFullScreen: true });
  }

  private onError: React.DOMAttributes<HTMLImageElement>['onError'] = () => this.setState({ status: 'error' });

  private onLoad: React.DOMAttributes<HTMLImageElement>['onLoad'] = () => this.setState({ status: 'success' });
}
