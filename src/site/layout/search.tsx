import React, { memo, useEffect } from 'react';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Highlight,
} from 'react-instantsearch-dom';
import { connectHits } from 'react-instantsearch-core';
import { useHistory } from 'react-router';

const [appId, apiKey, indexName] = [
  'PQHNASWN7G',
  'cb723f02acdb7e8ff5248c2028014b51',
  'union_design_h5',
];

type HitType = {
  anchor: string;
  data: { [key: string]: string };
  dirName: string;
  name: string;
  objectID: string;
};

const SearchHits = connectHits(({ hits }: { hits: HitType[] }) => {
  const history = useHistory();

  if (hits.length === 0) {
    return (
      <div className="hits">
        <div style={{ alignSelf: 'center' }}>没有要搜索的内容</div>
      </div>
    );
  }

  return (
    <div className="hits">
      {hits.map((hit) => (
        <div key={hit.objectID} className="hit">
          <div className="hit-content">
            <div className="name" onClick={() => {
               history.push(`/develop/components/${hit.dirName}`);
            }}>
              <Highlight hit={hit} attribute="name" />
            </div>
            <div className="content" onClick={() => {
               history.push(`/develop/components/${hit.dirName}?anchor=${hit.anchor}#${hit.anchor}`);
            }}>
              {hit.data?.lvl0 && <div className="lvl0"><Highlight hit={hit} attribute="data.lvl0" /></div>}
              {hit.data?.lvl1 && <div className="lvl1"><Highlight hit={hit} attribute="data.lvl1" /></div>}
              {hit.data?.lvl2 && <div className="lvl2"><Highlight hit={hit} attribute="data.lvl2" /></div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
});

const client = algoliasearch(appId, apiKey);

const getSearchPopup = (): HTMLDivElement | null => {
  const dom = document.getElementsByClassName("apidoc-search-popup") || [];
  if (dom.length === 0) return null;
  const div = dom[0] as HTMLDivElement;
  return div;
};

const Search = memo(() => {
  const searchBoxEvent = {
    onFocus: () => {
      const div = getSearchPopup();
      div && (div.style.visibility = 'visible');
    },
    onBlur: () => {
      setTimeout(() => {
        const div = getSearchPopup();
        div && (div.style.visibility = 'hidden');
      }, 100);
    },
  } as any;

  useEffect(() => {
    const div = getSearchPopup();
    div && (div.style.visibility = 'hidden');
  }, []);

  return (
    <InstantSearch
      searchClient={client}
      indexName={indexName}
    >
      <SearchBox {...searchBoxEvent} />
      <Configure hitsPerPage={5} />
      <div className="apidoc-search-popup">
        <SearchHits />
      </div>
    </InstantSearch>
  );
});

export default Search;
