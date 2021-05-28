import React from 'react';
import { Dialog } from '../index';

const Demo = () => (
  <>
    <div style={{ margin: 20, display: 'flex', flexFlow: 'column nowrap' }}>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 无标题 1
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容这是内容这是内容',
            actions: [
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 无标题 2
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 无标题 3
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 无标题 4
      </button>

      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 有标题 1
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 有标题 1
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容这是内容这是内容',
            actions: [
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 有标题 2
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 有标题 3
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 有标题 4
      </button>

      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容这是内容这是内容',
            actions: [
              { name: '主要操作1', style: { color: 'red' } },
              { name: '主要操作2' },
              { name: '主要操作3' },
            ],
          });
        }}
      >
        对话框 / 多个操作 4
      </button>

      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                backgroundColor: '#646566',
                borderRadius: 6,
                color: '#fff',
              }}
              >
                自定义区域
              </div>
            ),
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        对话框 / 自定义
      </button>

      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
            notice: { name: '主按钮' },
          });
        }}
      >
        对话框 / 通知类对话框 1
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
            notice: { name: '主按钮' },
          });
        }}
      >
        对话框 / 通知类对话框 2
      </button>
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                backgroundColor: '#646566',
                borderRadius: 6,
                color: '#fff',
              }}
              >
                自定义区域
              </div>
            ),
            notice: { name: '主按钮', onClick: () => Dialog.close() },
          });
        }}
      >
        对话框 / 通知类对话框 3
      </button>
    </div>
  </>
);

export default Demo;
