import { BUG_REPORT_URL, LIMIT } from "../../config";
import { AddressRowSkeleton } from "../AddressRow/skeleton";
import { AddressRow } from "../AddressRow";
import { Pagination } from "../Pagination";
import styles from "./styles.module.scss";

export const HallOfFame = ({
  data,
  searchTerm,
  setSearchTerm,
  skip,
  setSkip,
  limit,
  setLimit,
  totalUsers,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.title_container}>
          <h2 className={styles.title}>Hall of Fame</h2>
          <a href={BUG_REPORT_URL} target="_blank" rel="noopener noreferrer">
            SUBMIT BUG REPORT
          </a>
        </div>

        <div className={styles.table_wrapper}>
          <table className="table">
            <thead className="thead">
              <tr>
                <th className={styles.rank_head_cell}>Rank</th>
                <th></th>
                <th className={styles.name_head_cell}>Moniker</th>
                <th className={styles.address_head_cell}>Wallet Address</th>
                <th>Points</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data.length
                ? data.map((x, idx) => (
                    <AddressRow key={idx} data={x} index={idx + skip} />
                  ))
                : Array(LIMIT)
                    .fill(0)
                    .map((_, i) => <AddressRowSkeleton key={i} />)}
            </tbody>
          </table>

          <Pagination
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            skip={skip}
            setSkip={setSkip}
            limit={limit}
            setLimit={setLimit}
            records={totalUsers}
          />
        </div>
      </div>
    </div>
  );
};
