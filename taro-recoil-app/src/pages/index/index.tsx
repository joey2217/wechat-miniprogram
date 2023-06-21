import { View, Text, Input } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useRecoilState } from "recoil";
import { textState } from "../../store/atom";
import "./index.css";

export default function Index() {
  const [text, setText] = useRecoilState(textState);
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='index'>
      <Text>Hello world! {text}</Text>
      <Input value={text} onInput={(e) => setText(e.detail.value)} />
    </View>
  );
}
