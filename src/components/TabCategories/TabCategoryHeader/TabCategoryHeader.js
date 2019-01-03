import React from 'react';
import TabCategoryHeaderItem from '../TabCategoryHeader/TabCategoryHeaderItem/TabCategoryHeaderItem';

const tabCategoryHeader = (props) => {



  let listTabCategoryHeaderNameHTML = [];

  listTabCategoryHeaderNameHTML = (
    <>
      {
        props.listTabCategoryHeader.map(cat => {
          return (
            <TabCategoryHeaderItem key={cat.id} categoryName={cat.categoryName} id={cat.id} active={cat.active}>
              {cat.categoryName}
            </TabCategoryHeaderItem>
          )
        })
      }

    </>
  )


  return (
    <div className="category-tab-heading-wrapper">
      <div className="box-heading">
        <h2 className="products-section-title">Mới nhập</h2>
      </div>
      <div className="etabs">
        <ul className="nav nav-tabs">
          {listTabCategoryHeaderNameHTML}
        </ul>
      </div>
    </div>
  );
}

export default tabCategoryHeader;