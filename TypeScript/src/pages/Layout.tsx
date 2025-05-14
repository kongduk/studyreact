// Pages/Layout.tsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>소개페이지 공통 레이아웃</h1>
      <Outlet /> {/* 여기에 자식 라우트가 렌더링됨 */}
    </div>
  );
}

export default Layout;