import React, {useState} from 'react';
import { View, Text, Button, Image, ScrollView } from 'remax/wechat';
import styles from './index.css';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <View className={styles.app}>
      <Button onClick={() => setShow(true)}>显示</Button>
      {show && <Button onClick={() => setShow(false)}>隐藏</Button>}
      <ScrollView scrollWithAnimation scrollY style={{height: '50vh'}}>
        {new Array(200).fill(0).map((_, index) => <View key={index}>{index}</View>)}
      </ScrollView>
    </View>
  );
};
