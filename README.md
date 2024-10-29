Node.js v20.18.0

A. Cai dat cho development: 
I. Tạo base dự án.
1. Cài đặt project:
npx create-next-app@latest
	2 No: Tailwind CSS and Turbopack.
2. Setting package.json -> https://www.npmjs.com/package/...
a) Check update: ncu
b) Update: npm i
3. Chạy: npm run dev.
4. Muốn css:
golobals.css -> import ở layout.tsx.
5. Thiết kế admin: Ant Design.
a) Cài đặt ant: npm i --save-exact antd@5.21.6
b) Fix giao diện xem ảnh trên web bị lỗi:
	Cài đặt: npm i --save-exact @ant-design/nextjs-registry@1.0.1

B. Chay tai che do production
1. Clone code.
2. Cai dat thu vien: npm i
3. Update file .env.production (neu can thiet)
4. Build du an: npm run build
5. Chay du an: npm run preview