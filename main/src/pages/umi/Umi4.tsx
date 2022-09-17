import styles from "@/common.module.less";

const Umi4 = () => {
  return (
    <div className={styles.container}>
      <h1>Umi4子应用</h1>

      <div className={styles["sub-app-container"]}>
        <micro-app
          name="umi4"
          url="http://localhost:8000/"
          // baseroute="/umi/umi4"
        ></micro-app>
      </div>
    </div>
  );
};

export default Umi4;
