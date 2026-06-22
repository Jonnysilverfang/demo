#pull app từ dockerhub
FROM nginx

#thay thế file cấu hình nginx mặc định bằng file cấu hình của mình
WORKDIR /usr/share/nginx/html

#copy tất cả các thứ ngang cấp dockerfile vào thư mục html của nginx
COPY . .

#port mà container sẽ lắng nghe, right port, ở đây là 80 vì nginx mặc định chạy trên port 80
EXPOSE 80

#docker build . -t landing_page:latest 