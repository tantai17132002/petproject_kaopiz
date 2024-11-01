import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@/app/globals.css'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Memdover</title>
        <link
          rel="stylesheet"
          href="/assets/themify-icons/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/responsive.css"
        />
      </head>
      <body>
        <AntdRegistry>
          {/* Header */}
          <header className="top-header">
            <div className="container d-flex justify-content-between">
              <div className="auth-actions">
                <a href="#">Đăng nhập</a>
                <a href="#">Đăng ký</a>
              </div>
              <div className="shop-actions">
                <a href="#"><i className="ti-zoom-in"></i></a>
                <a href="#"><i className="ti-shopping-cart"></i> Giỏ hàng: (0) sản phẩm</a>
              </div>
            </div>
          </header>

          <header className="main-header">
            <div className="container d-flex justify-content-between align-items-center">
              <a href="#" className="logo">
                <img
                  src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/logo.png?1697775911374"
                  alt="Logo"
                />
              </a>
              <nav>
                <ul className="nav-list d-flex">
                  <li><a href="#">TRANG CHỦ</a></li>
                  <li><a href="#">GIỚI THIỆU</a></li>
                  <li><a href="#">SẢN PHẨM</a></li>
                  <li><a href="#">TIN TỨC</a></li>
                  <li><a href="#">LIÊN HỆ</a></li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="footer bg-dark text-white text-center py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h5>Giới thiệu</h5>
                  <p>
                    Memdover là nơi cung cấp các căn hộ, nhà và biệt thự chất lượng cao và dịch vụ tốt nhất cho khách hàng.
                  </p>
                </div>
                <div className="col-md-4">
                  <h5>Liên hệ</h5>
                  <p>Email: admin@google.com</p>
                  <p>Điện thoại: 0612156786</p>
                </div>
                <div className="col-md-4">
                  <h5>Theo dõi chúng tôi</h5>
                  <a href="#" className="text-white me-2"><i className="ti-facebook"></i></a>
                  <a href="#" className="text-white me-2"><i className="ti-twitter"></i></a>
                  <a href="#" className="text-white"><i className="ti-instagram"></i></a>
                </div>
              </div>
              <div className="mt-3">
                <p>&copy; 2024 Memdover. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </AntdRegistry>

        {/* Scripts */}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <Script src="/assets/home.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
