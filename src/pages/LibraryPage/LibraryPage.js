import React, { Component, Fragment } from 'react';

//Components
import Library_empty from "../../components/EmptyList/EmptyList";
import Library_addBook from "../../components/library_addBooks/Library_addBooks"
import Library_all_categories from "../../components/library/BookList/Library_all_categories"
import Library_all_categories_Modal from "../../components/library/LibraryList-modal/LibraryList-modal"


export default class LibraryPage extends Component {
  render() {
    return (
      <Fragment>
        <Library_empty />
        <Library_addBook />
        <Library_all_categories />
        <Library_all_categories_Modal />
      </Fragment>
    )


  }
}
