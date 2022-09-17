import styles from '@/common.module.less';

const Solidjs = () => {
  return (
    <div className={styles.container}>
      <h1>Solidjs子应用</h1>

      <div className={styles['sub-app-container']}>
        <micro-app
          name="solidjs"
          url="http://localhost:3112/solidjs/"
          inline // 使用内联script模式
          disableSandbox // 关闭沙箱
        ></micro-app>
      </div>
    </div>
  );
};

export default Solidjs;
