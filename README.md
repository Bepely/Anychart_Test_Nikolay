# Anychart Test Project Nikolay

### Описание

Небольшое Full-stack приложение по визуализации данных, хранящихся на сервере.

Запустить возможно, введя в терминале:  
cd ./backend  
node index.js

Папка frontend является dev сервером  
Чтобы запустить его, введите в терминале:  
cd ./frontend  
npm i  
npm run dev

### Технологии

Vite - удобно делать фронт, компайлить, настраивать прокси.  
Express - Что бы не писать гору лишнего кода на чистом Node.

### Процесс

14.02.2023(вт):  
•Создал сервер  
•Наполнил сервер данными
•Создал сайт
•Настроил базовое API соединение  
•Наладил прокси на dev сервере фронтенда
•Создал "State" объект графика (по аналогии с Redux-toolkit)

15.02.2023(ср):  
•Подключил SVG  
•Создал Conditional rendering в SVG, в зависимости от свойств State объекта  
•Прорабатываю Архитектуру Приложения  
•Создал Git репозиторий и этот README файл

16.02.2023 (чт)

17.02.2023 (пт)  
•Хаотично чинил, что вчера не документировал

20.02.2023 (пн)
•Понял какой чепухи я наделал
•Исправил нерабочий viewBox (По-сути опять заплатки, только рабочие)
•Сделал интерактивный кроссхейр
•Кроссхейр очень сильно лагает, скорее там гигантская свалка временных переменных.
