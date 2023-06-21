import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import { RecoilRoot } from "recoil";
import "./app.css";

function App({ children }: PropsWithChildren<unknown>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return <RecoilRoot>{children}</RecoilRoot>
}

export default App;
