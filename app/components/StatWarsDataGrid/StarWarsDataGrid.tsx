import React from "react"
import { TypeMetadata } from "../../types/TypeMetadata"
import styles from "./starWarsDataGrid.module.css"

export interface StarWarsDataGridProps {
  metadata: TypeMetadata
  fetchedData: any[]
}

function StarWarsDataGrid(props: StarWarsDataGridProps) {
  const { fetchedData, metadata } = props

  return (
    <div className={styles.container}>
      {fetchedData.map((e, i) => (
        <div key={i} className={styles.gridBlock}>
          <ul>
            {metadata.fields.map((f, i) => (
              <div key={i} className={styles.rows}>
                <li className={styles.li}>
                  <span className={styles.span}>{f.displayName}</span>:{" "}
                  {e[f.key]}
                </li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default StarWarsDataGrid
