"use client";
import React from "react";
import navigateTo from "../../helpers/navigateTo";
import styles from "./starWarsHeader.module.css";
import getStarWarsMetadata from "@/app/helpers/getStarWarsMetadata";

export interface StarWarsHeaderProps {
  selectedItem: string;
  sortBy: string[];
}

function StarWarsHeader(props: StarWarsHeaderProps) {
  const onChangeHandler = (event: { target: { value: string } }) => {
    navigateTo("/" + event.target.value);
  };

  const sortButtonHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    const button = event.target as HTMLInputElement;
    const url = "/" + props.selectedItem + "/" + button?.value;
    console.log(url);
    if (
      props.sortBy === null ||
      props.sortBy?.length === 0 ||
      (props.sortBy?.length === 2 && props.sortBy[1] === "desc")
    ) {
      navigateTo(url + "/asc");
    } else navigateTo(url + "/desc");
  };

  const mapping = getStarWarsMetadata();
  const metadata = mapping.get(props.selectedItem);
  const sortableFields = metadata?.fields.filter((field) => field.isSortable);
  const keys = Array.from(mapping.keys());
  return (
    <>
      <h1 className={styles.logo}>StarWars</h1>
      <p className={styles.message}>
        Select one of the options from the above dropdown to get relavent
        information
      </p>

      <div className={styles.container}>
        <select
          className={`${styles.content} ${styles.select}`}
          onChange={onChangeHandler}
          value={props.selectedItem}
        >
          <option value={""}>Select</option>
          {keys.map((key) => (
            <option
              key={key}
              className={`${styles.content} ${styles.select}`}
              value={key}
            >
              {key}
            </option>
          ))}
        </select>
        {sortableFields?.map((sortByItems, id) => (
          <button
            key={id}
            className={`${styles.content} ${styles.button}`}
            onClick={sortButtonHandler}
            value={sortByItems.key}
          >
            {sortByItems.displayName}
          </button>
        ))}
      </div>
    </>
  );
}

export default StarWarsHeader;
