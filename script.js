/* ============================================================
   ДАННЫЕ
   ============================================================ */
const R1 = [
{name:"Железо",sub:"устройство ПК",icon:"🖥️",hue:265,items:[
 {v:100,q:"Как называют «мозг» компьютера — устройство, которое выполняет все вычисления и управляет остальными узлами?",a:"Процессор (ЦПУ, центральный процессор)",h:"Его скорость измеряют в гигагерцах, а количество ядер пишут в характеристиках.",f:"В современных процессорах десятки миллиардов транзисторов — они меньше вируса гриппа. 3 ГГц означает 3 миллиарда тактов в секунду, а несколько ядер позволяют выполнять разные задачи одновременно."},
 {v:200,q:"Какая память компьютера хранит информацию даже тогда, когда питание полностью выключено?",a:"Жёсткий диск (HDD), SSD или флешка — энергонезависимая память",h:"Флешка и жёсткий диск — именно такие, а оперативная память — наоборот.",f:"SSD быстрее обычного жёсткого диска в 10–50 раз: в нём нет вращающихся блинов и движущейся головки, данные читаются прямо из микросхем. Поэтому ноутбук с SSD включается за 8–10 секунд."},
 {v:300,q:"Что произойдёт с несохранённым документом, который «жил» в оперативной памяти, если внезапно выключить компьютер?",a:"Он исчезнет навсегда — оперативная память энергозависима",h:"Эта память «живёт» только пока есть электричество.",f:"ОЗУ (RAM) работает в сотни раз быстрее диска, поэтому все запущенные программы находятся именно там. Отсюда главное правило: сохраняйся часто — Ctrl+S каждые несколько минут."},
 {v:400,q:"Расположите по возрастанию объёма: 1 ТБ, 512 МБ, 1 ГБ, 100 КБ.",a:"100 КБ → 512 МБ → 1 ГБ → 1 ТБ",h:"Вспомните: 1 МБ = 1024 КБ, а 1 ГБ = 1024 МБ.",f:"Компьютер считает двойками, поэтому в килобайте 1024 байта, а не 1000. В 1 ТБ помещается примерно 250 фильмов в HD или около 250 000 песен. А 100 КБ — это всего 50 страниц обычного текста."},
 {v:500,q:"Как называются мельчайшие точки, из которых складывается картинка на экране? Сколько их в разрешении Full HD?",a:"Пиксели. В Full HD их 2 073 600 (1920 × 1080)",h:"Их количество равно ширине экрана, умноженной на высоту.",f:"Каждый пиксель состоит из трёх субпикселей — красного, зелёного и синего (RGB). Смешивая их яркость, экран создаёт миллионы цветов. При 144 Гц каждый пиксель обновляется 144 раза в секунду."}]},
{name:"Коды",sub:"числа и биты",icon:"🔢",hue:190,items:[
 {v:100,q:"Сколько цифр используется в двоичной системе счисления и какие?",a:"Две цифры: 0 и 1",h:"Их ровно столько, сколько положений у выключателя света.",f:"Компьютер понимает только два состояния: есть ток — 1, нет тока — 0. Из таких «да/нет» складывается абсолютно вся информация: текст, фото, музыка и игры."},
 {v:200,q:"Сколько битов содержится в одном байте?",a:"8 бит",h:"Это число равно 2 в третьей степени.",f:"Один байт — это один символ текста в кодировке ASCII. Слово «ИНФОРМАТИКА» из 11 букв занимает 11 байт, а в UTF-8 кириллица требует 2 байта на букву — уже 22 байта."},
 {v:300,q:"Переведите двоичное число 1011 в десятичную систему.",a:"11  (8 + 0 + 2 + 1)",h:"Разряды-степени двойки: 8, 4, 2, 1.",f:"Складываем только те разряды, где стоит единица. Так компьютер «понимает» любое число: 1101 = 8+4+1 = 13, 1111 = 15, 10000 = 16."},
 {v:400,q:"Сколько различных символов можно закодировать одним байтом?",a:"256 символов (2 в степени 8)",h:"Степень: 2⁸.",f:"Первые 128 символов — это ASCII: латиница, цифры и знаки препинания. Остальные места распределили под другие алфавиты. В Unicode уже более 149 000 символов, поэтому эмодзи 😎 занимает целых 4 байта."},
 {v:500,q:"Переведите число 25 в двоичную систему счисления.",a:"11001",h:"Подсказка: 16 + 8 + 1.",f:"Делим число на 2 и записываем остатки снизу вверх: 25 → 12(1) → 6(0) → 3(0) → 1(1) → 0(1). Читаем остатки снизу вверх — получаем 11001. Проверка: 16+8+1 = 25 ✔"}]},
{name:"Файлы",sub:"папки и расширения",icon:"📁",hue:35,items:[
 {v:100,q:"Как по одному имени файла обычно можно понять, что это за файл и какой программой он открывается?",a:"По расширению — части имени после последней точки",h:"Находится в самом конце имени файла.",f:"Расширение — подсказка для системы: .mp3 — звук, .mp4 — видео, .exe — программа. Windows умеет скрывать расширения, поэтому файл «фото.jpg.exe» выглядит как картинка. Всегда включайте показ расширений!"},
 {v:200,q:"Какие расширения у документов Microsoft Word и у презентаций PowerPoint?",a:".docx (Word) и .pptx (PowerPoint)",h:"Три буквы плюс x на конце.",f:"Буква x появилась в 2007 году и означает новый формат на основе XML. Кстати, .docx — это на самом деле ZIP-архив: переименуйте его в .zip и загляните внутрь — увидите папки с текстом и картинками."},
 {v:300,q:"Что означает запись  C:\\Школа\\Информатика\\урок.txt ?",a:"Это полный путь к файлу: диск C → папка «Школа» → папка «Информатика» → файл урок.txt",h:"Начинается с буквы диска и двоеточия.",f:"Файловая система похожа на перевёрнутое дерево: корень — диск, ветви — папки, листья — файлы. В Linux и macOS разделитель другой — прямой слэш: /home/учёба/урок.txt."},
 {v:400,q:"Какие из этих файлов являются изображениями: report.docx, photo.png, song.mp3, meme.jpg, data.csv, clip.gif ?",a:"photo.png, meme.jpg, clip.gif",h:"Ищите три файла, которые открываются в просмотрщике картинок.",f:"PNG хранит картинку без потерь и поддерживает прозрачность — идеален для логотипов. JPEG сжимает с потерми и лучше подходит для фото. GIF умеет всего 256 цветов, зато поддерживает анимацию. А .csv — это обычная текстовая таблица."},
 {v:500,q:"Файл отправили в «Корзину», а затем очистили её. Можно ли его вернуть обычными средствами и почему?",a:"Нет: система лишь помечает место как свободное, и данные могут быть перезаписаны в любой момент",h:"Ключевая идея — «свободное место» и «перезапись».",f:"Программы-восстановители иногда успевают вернуть файл, пока его место не заняли новые данные, но гарантии нет. Поэтому есть правило резервных копий «3-2-1»: 3 копии, на 2 разных носителях, 1 — в другом месте (в облаке)."}]},
{name:"Сеть",sub:"интернет и защита",icon:"🌐",hue:150,items:[
 {v:100,q:"Как называется программа для просмотра веб-страниц?",a:"Браузер (Chrome, Firefox, Safari, Edge, Яндекс Браузер)",h:"Chrome и Firefox — примеры таких программ.",f:"Браузер получает с сервера код страницы на HTML, оформляет его по правилам CSS и «оживляет» с помощью JavaScript. Страница из сотен файлов собирается у вас на экране за доли секунды."},
 {v:200,q:"О чём говорит значок замка и буквы https в начале адреса сайта?",a:"Соединение зашифровано: данные между вами и сайтом защищены",h:"Буква s означает secure — «безопасный».",f:"Без этой буквы пароль летит по сети открытым текстом, и его может перехватить любой в той же Wi-Fi-сети. Никогда не вводите пароли и данные карты на http-страницах."},
 {v:300,q:"Что такое фишинг (от англ. fishing — «рыбалка»)?",a:"Мошенничество: поддельные сайты и письма выманивают логины, пароли и данные карт",h:"Мошенники «ловят» ваши данные, как рыбу.",f:"Признаки фишинга: спешка и запугивание («аккаунт заблокируют через час»), странный адрес (g00gle-pay.ru), просьба срочно ввести пароль, ошибки в тексте. Не переходите по ссылкам из писем — набирайте адрес сами."},
 {v:400,q:"Как называется вредоносная программа, которая шифрует все файлы и требует деньги за расшифровку?",a:"Вирус-шифровальщик (ransomware, от ransom — «выкуп»)",h:"Английское слово ransom переводится как «выкуп».",f:"Чаще всего он попадает через вложения в письмах и пиратские «взломанные» программы. Платить выкуп нельзя: деньги не вернут, а файлы часто остаются зашифрованными. Спасают только резервная копия и антивирус."},
 {v:500,q:"Какой пароль надёжнее: «Qwerty123», «Вася2011» или «k#7Tp!mZq2xL»? Объясните почему.",a:"Третий. Главное — длина и непредсказуемость",h:"Смотрите на количество символов и на то, есть ли в пароле словарное слово.",f:"«Qwerty123» — самый популярный пароль в мире, его взламывают мгновенно. Длина важнее сложности: 12+ случайных символов — это миллиарды миллиардов вариантов. У каждого сайта должен быть свой пароль, помогают менеджер паролей и двухфакторная защита."}]},
{name:"Логика",sub:"алгоритмы",icon:"🧩",hue:325,items:[
 {v:100,q:"Что такое алгоритм?",a:"Понятная и конечная последовательность шагов, приводящая к решению задачи",h:"Само слово произошло от имени учёного аль-Хорезми.",f:"Труды математика IX века Мухаммеда аль-Хорезми перевели на латынь как «Algoritmi». Алгоритмом является и рецепт борща, и инструкция по сборке шкафа, и любая программа в телефоне."},
 {v:200,q:"Какой фигурой в блок-схеме обозначают проверку условия?",a:"Ромбом (блок принятия решения)",h:"Фигура с четырьмя углами, но не квадрат и не прямоугольник.",f:"Овал — начало или конец, прямоугольник — действие, параллелограмм — ввод/вывод данных, ромб — вопрос «да/нет». Зная всего четыре фигуры, можно описать любую программу."},
 {v:300,q:"Назовите три базовые конструкции, из которых состоит любой алгоритм.",a:"Следование (по порядку), ветвление (если… то… иначе…) и цикл (повторение)",h:"Порядок, выбор, повтор.",f:"В 1966 году доказана теорема Бёма — Якопини: этих трёх конструкций достаточно для записи абсолютно любого алгоритма. Поэтому даже самая сложная игра — это очень много «если», «повтори» и «сделай»."},
 {v:400,q:"Что будет в переменных после выполнения: X = 5;  Y = 3;  X = X + Y;  Y = X − Y;  X = X − Y ?",a:"X = 3, Y = 5 — переменные поменялись значениями",h:"Отслеживайте значения X и Y после каждой строки.",f:"Это классический обмен значениями без третьей переменной. Программисты чаще пишут проще: X, Y = Y, X (так умеет Python) или используют временную переменную: t = X; X = Y; Y = t."},
 {v:500,q:"Исполнитель делает: «вперёд 3, направо, вперёд 3, направо, вперёд 3, направо, вперёд 3». Где он окажется в конце?",a:"В той же точке, где начал: он прошёл квадрат и вернулся обратно",h:"Сколько градусов в сумме дают четыре поворота?",f:"Четыре поворота по 90° — это полный оборот на 360°. Именно так рисуют фигуры в Scratch и Logo: команда «повтори 4 [вперёд 100, направо 90]» заменяет восемь строчек. Для шестиугольника нужен поворот на 60°."}]},
{name:"История",sub:"люди и факты",icon:"📜",hue:8,items:[
 {v:100,q:"Кого в мире считают первым программистом?",a:"Аду Лавлейс (1843 год)",h:"Дочь английского поэта лорда Байрона.",f:"Ада написала программу для вычисления чисел Бернулли — за сто лет до появления настоящих компьютеров. В её честь назван язык программирования Ada, а в Великобритании отмечают День Ады Лавлейс."},
 {v:200,q:"Как в начале XX века называли людей, чья работа состояла в ручных вычислениях?",a:"Их называли «компьютерами» (computer = вычислитель)",h:"Это была профессия, а не машина.",f:"Такие «вычислители» составляли таблицы для астрономии, навигации и баллистики. Очень часто эту работу выполняли женщины — их математические способности тогда серьёзно недооценивали."},
 {v:300,q:"Кто придумал «аналитическую машину» — прообраз компьютера с памятью и программами на перфокартах?",a:"Чарльз Бэббидж (Англия, XIX век)",h:"Англичанин, шестерёнки, перфокарты, XIX век.",f:"При жизни Бэббиджа машину так и не построили — не хватило точности деталей и денег. В 1991 году её собрали строго по чертежам: 8000 шестерёнок, масса 5 тонн — и она действительно работает!"},
 {v:400,q:"В честь чего назван язык программирования Python: в честь змеи или чего-то другого?",a:"В честь британского комедийного шоу «Монти Пайтон»",h:"Юмористическое шоу BBC 1970-х годов.",f:"Гвидо ван Россум придумал язык в 1991 году и был поклонником этого шоу. Змея на логотипе появилась позже, уже как красивый символ. Сегодня Python — язык №1 для обучения и искусственного интеллекта."},
 {v:500,q:"Откуда в информатике появилось слово «баг» (bug — «жук») для обозначения ошибки?",a:"В 1947 году из реле компьютера Harvard Mark II достали застрявшего мотылька",h:"Насекомое реально застряло внутри компьютера.",f:"Инженеры команды Грейс Хоппер вклеили мотылька в журнал и написали: «Первый обнаруженный случай бага». Слово прижилось, а поиск ошибок стали называть отладкой — debugging."}]}];

const R2 = [
{q:"Какое сочетание клавиш копирует выделенный фрагмент?",a:"Ctrl + C",h:"Первая буква английского слова Copy.",f:"Ctrl+X — вырезать, Ctrl+V — вставить, Ctrl+Z — отменить, Ctrl+A — выделить всё. Эти четыре комбинации работают почти во всех программах мира."},
{q:"Что произойдёт, если кликнуть по объекту правой кнопкой мыши?",a:"Откроется контекстное меню с командами для этого объекта",h:"Появится небольшой список действий.",f:"Меню называется контекстным, потому что его состав зависит от контекста: на рабочем столе одни команды, на картинке — другие, в тексте — третьи."},
{q:"Что больше: 1 Мбайт или 1000 Кбайт?",a:"1 Мбайт (в нём 1024 Кбайт)",h:"Компьютер округляет до степеней двойки.",f:"Из-за этой разницы флешка «на 64 ГБ» показывает в Windows около 59,6 ГБ: производители считают гигабайт как 1000 мегабайт, а система — как 1024."},
{q:"Как называется программа, которая переводит весь исходный код на машинный язык сразу, одним блоком?",a:"Компилятор",h:"Есть ещё интерпретатор — он переводит построчно.",f:"Компилятор превращает программу в готовый исполняемый файл (так работают C++ и Pascal), а интерпретатор выполняет код строка за строком (Python, JavaScript). Компиляция дольше, зато программа потом работает быстрее."},
{q:"Что такое скриншот и какая клавиша его делает в Windows?",a:"Снимок экрана; клавиша PrtSc (Print Screen)",h:"screen — экран, shot — кадр.",f:"PrtSc копирует картинку в буфер обмена, а Win + PrtSc сразу сохраняет файл в папку «Изображения → Снимки экрана». Win + Shift + S вырезает только выбранную область."},
{q:"Как называлась первая в мире компьютерная сеть, запущенная в 1969 году?",a:"ARPANET",h:"Проект министерства обороны США, предок интернета.",f:"Первое сообщение передали между двумя университетами на расстоянии 600 км. Хотели отправить слово «LOGIN», но система смогла передать только две буквы — «LO». Это и было первое сообщение интернета."},
{q:"Из каких частей состоит адрес сайта, например  https://school.ru/lessons ? ",a:"Протокол (https) + домен (school.ru) + путь к странице (/lessons)",h:"Сначала «как передаём», потом «где», потом «что именно».",f:"Домен — это имя вместо числа. Компьютеры на самом деле общаются по IP-адресам вроде 142.250.74.14, а специальная система DNS переводит понятное имя в число — как телефонная книга интернета."},
{q:"Как называется система, которая ищет информацию в интернете по ключевым словам?",a:"Поисковая система (Яндекс, Google)",h:"Специальные роботы постоянно «обходят» сайты.",f:"Поисковые роботы-«пауки» переходят по ссылкам и сохраняют копии страниц в индекс — гигантскую картотеку. Когда вы вводите запрос, система за доли секунды выбирает из миллиардов страниц самые подходящие."},
{q:"Что означает слово «информация» в переводе с латыни (informatio)?",a:"Разъяснение, изложение, представление",h:"Это не «данные», а скорее «сведение о чём-то».",f:"В информатике информация — это сведения об окружающем мире, которые можно хранить, передавать и обрабатывать. Одно и то же сообщение может быть информацией для одного человека и бесполезным шумом для другого."},
{q:"Как называется наименьшая единица измерения информации?",a:"Бит — один разряд двоичного числа (0 или 1)",h:"Ровно столько, сколько нужно для ответа «да/нет».",f:"Бит — это количество информации, которое уменьшает неизвестность вдвое. Чтобы угадать число от 1 до 8, достаточно 3 бит (3 вопроса «да/нет»), а от 1 до 1000 — 10 бит."},
{q:"Как в Scratch называется блок, который повторяет действие несколько раз?",a:"Блок цикла: «повторить N раз» или «всегда»",h:"Это «цикл» на языке Scratch.",f:"Циклы экономят сотни строк кода: чтобы нарисовать 100 звёзд, не нужно писать 100 команд — достаточно одной команды внутри цикла. В Python для этого есть for и while."},
{q:"Что было раньше: перфокарта, дискета или флешка? И сколько информации помещалось на перфокарту?",a:"Перфокарта (самая старая). Обычно около 80 символов в одной строке-колонке",h:"Информацию на нём записывали дырочками.",f:"Перфокарты использовали ещё в XIX веке для управления ткацкими станками, а потом — в первых компьютерах. Одна пачка перфокарт с программой весила килограммы, а одна ошибка в дырочке означала «баг»."}];

const R3 = [
{q:"Что такое «облачное хранилище»?",a:"Серверы в интернете, где лежат ваши файлы и к которым можно зайти с любого устройства",h:"Файлы хранятся не у вас дома, а «в интернете».",f:"Облако — это обычные компьютеры (серверы) в дата-центрах, которые работают круглосуточно. Файл загружается туда по защищённому каналу и хранится в нескольких копиях на разных дисках, поэтому не теряется даже при поломке оборудования."},
{q:"Что на самом деле означает сокращение Wi-Fi?",a:"Ничего! Это просто красивое название торговой марки, а не аббревиатура",h:"Распространённый миф — что это «Wireless Fidelity».",f:"Компания-бренд-консультант придумала слово Wi-Fi в 1999 году по аналогии с Hi-Fi, и оно оказалось настолько удачным, что его расшифровку «Wireless Fidelity» придумали задним числом. Основатели официально заявили: Wi-Fi не означает ничего."},
{q:"Что такое CAPTCHA — те самые буквы, картинки и светофоры при входе на сайт?",a:"Проверка, человек вы или робот",h:"Полное название связано со словом «тест».",f:"CAPTCHA расшифровывается как «полностью автоматизированный публичный тест для различения компьютеров и людей». Интересно: разбирая слова со старых сканов книг, пользователи заодно помогали оцифровывать архивы — так работал проект reCAPTCHA."},
{q:"Что делает «Диспетчер задач» и каким сочетанием клавиш он вызывается?",a:"Показывает запущенные программы и нагрузку на систему; Ctrl + Shift + Esc (или Ctrl + Alt + Del)",h:"Здесь можно «снять задачу» с зависшей программы.",f:"Диспетчер задач показывает загрузку процессора, памяти, диска и сети, а также какие программы «съедают» батарею. Если браузер завис, его можно закрыть здесь, не перезагружая компьютер."},
{q:"Что такое нейросеть простыми словами?",a:"Программа, которая учится на примерах, а не выполняет жёстко прописанные правила",h:"Она «тренируется» на миллионах картинок или текстов.",f:"Искусственный нейрон повторяет идею нервной клетки: получает числа, умножает на «вес» и передаёт результат дальше. Во время обучения веса подстраиваются так, чтобы ответы становились точнее. Именно поэтому нейросеть нельзя «написать по инструкции» — её можно только натренировать."},
{q:"Что такое «ярлык» программы на рабочем столе?",a:"Ссылка-указатель на саму программу, а не её копия",h:"Стрелочка в углу иконки — не случайная.",f:"Ярлык весит несколько килобайт и хранит только путь к файлу. Поэтому удаление ярлыка не удаляет программу. А вот если удалить сам файл из папки Program Files — ярлык перестанет работать."},
{q:"В каких единицах измеряют скорость интернета и чем Мбит/с отличается от МБ/с?",a:"Мбит/с (мегабиты в секунду). 1 МБ/с = 8 Мбит/с",h:"В одном байте 8 бит.",f:"Тариф «100 Мбит/с» — это на самом деле 12,5 МБ/с реальной скорости скачивания. Фильм объёмом 1,5 ГБ при таком тарифе загрузится примерно за 2 минуты. Провайдеры указывают мегабиты, потому что цифра выглядит больше."},
{q:"Что такое «резервная копия» и какое правило копий считается правильным?",a:"Запасная копия важных данных; правило «3-2-1»",h:"Три, два, один — цифры в названии правила.",f:"Правило «3-2-1»: храните 3 копии данных, на 2 разных типах носителей, и 1 копию — в другом месте (в облаке). Так данные выживут даже при потере ноутбука, пожаре или атаке вируса-шифровальщика."}];

const FINALS = [
{theme:"Всё обо всём",q:"Это слово образовано слиянием двух: «информация» + «автоматика». А как ту же науку называют в англоязычных странах — там тоже два слова?",a:"Информатика — и Computer Science («компьютерная наука»)",f:"Информатика изучает способы хранения, обработки и передачи информации, а компьютеры — лишь её инструмент. Computer Science делает акцент на самих вычислениях и алгоритмах. Программировать можно и без компьютера: первые алгоритмы писали на бумаге."},
{theme:"Всё обо всём",q:"Как называется последовательность команд, которая выполняется компьютером для решения задачи, и кто её придумывает?",a:"Программа (алгоритм, записанный на языке программирования); её создаёт программист",f:"Программа — это алгоритм, записанный на языке, понятном и человеку, и машине. Первую программу написала Ада Лавлейс в 1843 году — за сто лет до появления работающих компьютеров."},
{theme:"Всё обо всём",q:"Сколько бит нужно, чтобы закодировать выбор одного из 32 вариантов?",a:"5 бит (2⁵ = 32)",f:"Формула простая: N = 2 в степени i, где i — количество бит. 3 бита дают 8 вариантов, 8 бит — 256, 20 бит — около миллиона. Именно так компьютер «упаковывает» любой выбор: цвет пикселя, букву алфавита или кнопку в игре."}];

const EVENTS = [
 {id:"x2",   icon:"✨", name:"Удвоение",       desc:"Баллы за этот вопрос удваиваются!"},
 {id:"prize",icon:"🎁", name:"Приз",           desc:"Верный ответ даёт +200 бонусом!"},
 {id:"safe", icon:"🛡️", name:"Щит",            desc:"За ошибку баллы не снимаются."},
 {id:"all",  icon:"🤝", name:"Командный бонус",desc:"При верном ответе все команды получают +100."}
];

const TEAM_COLORS = ["#7c5cff","#22d3ee","#ff7a4d","#3ddc84"];
const TIMES = {100:20,200:25,300:30,400:35,500:40};
const ROUNDS = [
 {n:1,name:"Своя игра",icon:"🎯",desc:"Классическое поле: 6 тем по 5 вопросов стоимостью от 100 до 500 баллов.",c1:"#22d3ee",c2:"#7c5cff",total:30},
 {n:2,name:"Блиц",icon:"⚡",desc:"12 быстрых вопросов. 15 секунд на каждый: верно +100, ошибка −50.",c1:"#3ddc84",c2:"#22d3ee",total:12},
 {n:3,name:"Кот в мешке",icon:"🎁",desc:"8 вопросов-сюрпризов со скрытой стоимостью и случайным событием.",c1:"#ffcf4d",c2:"#ff7a4d",total:8},
 {n:4,name:"Финальный аукцион",icon:"🏆",desc:"Ставки ва-банк и один вопрос, который может перевернуть игру.",c1:"#ff5d7a",c2:"#7c5cff",total:1}
];

/* ============================================================
   СОСТОЯНИЕ
   ============================================================ */
let teams=[], activeTeam=0, muted=false, teamCount=2;
let currentRound=1; const roundsDone=[false,false,false,false];
const usedR1=new Set(), historyR1=[];
let cur=null, timerId=null, tLeft=0, tTotal=0;
let blitzIdx=0, blitzTimer=null, blitzLeft=0, blitzLog=[], blitzDone=0;
let bags=[], bagsOpen=0;
let aucStage="bet", aucBets={}, aucAnswered={}, aucFinal=null;

/* ============================================================
   ЗВУК
   ============================================================ */
let actx=null;
function AC(){ if(!actx){ const A=window.AudioContext||window.webkitAudioContext; if(A) actx=new A(); } if(actx&&actx.state==="suspended") actx.resume(); return actx; }
function tone(f,d,type,v,delay){
  if(muted) return; const c=AC(); if(!c) return;
  const t0=c.currentTime+(delay||0), o=c.createOscillator(), g=c.createGain();
  o.type=type||"sine"; o.frequency.setValueAtTime(f,t0);
  g.gain.setValueAtTime(.0001,t0); g.gain.exponentialRampToValueAtTime(v||.13,t0+.015);
  g.gain.exponentialRampToValueAtTime(.0001,t0+d);
  o.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0+d+.05);
}
const sClick=()=>tone(520,.09,"triangle",.10);
const sHover=()=>tone(880,.05,"sine",.05);
const sReveal=()=>[523,659,784].forEach((f,i)=>tone(f,.28,"triangle",.11,i*.07));
const sCorrect=()=>[523,659,784,1047].forEach((f,i)=>tone(f,.3,"sine",.13,i*.08));
const sWrong=()=>{tone(220,.35,"sawtooth",.10);tone(160,.45,"sawtooth",.10,.12)};
const sTick=()=>tone(1200,.05,"square",.06);
const sMagic=()=>[392,523,659,880,1047].forEach((f,i)=>tone(f,.35,"triangle",.12,i*.06));
const sWin=()=>[523,523,659,784,659,784,1047].forEach((f,i)=>tone(f,.34,"triangle",.13,i*.13));

/* ============================================================
   КОНФЕТТИ
   ============================================================ */
const cvs=document.getElementById("confetti"), cctx=cvs.getContext("2d");
let parts=[], rafId=null;
function sizeCanvas(){ cvs.width=innerWidth; cvs.height=innerHeight; }
sizeCanvas(); addEventListener("resize",sizeCanvas);
function burst(n,x,y,spread){
  const cols=["#7c5cff","#22d3ee","#3ddc84","#ffcf4d","#ff5d7a","#ffffff"];
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2, sp=(spread||9)*(.4+Math.random());
    parts.push({x:x===undefined?innerWidth/2:x,y:y===undefined?innerHeight/3:y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-4,
      w:5+Math.random()*7,h:4+Math.random()*8,rot:Math.random()*6.3,vr:(Math.random()-.5)*.35,col:cols[i%cols.length],life:1});
  }
  if(!rafId) rafId=requestAnimationFrame(loopConf);
}
function loopConf(){
  cctx.clearRect(0,0,cvs.width,cvs.height);
  parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.24;p.vx*=.99;p.rot+=p.vr;p.life-=.006;
    cctx.save();cctx.translate(p.x,p.y);cctx.rotate(p.rot);cctx.globalAlpha=Math.max(0,p.life);
    cctx.fillStyle=p.col;cctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cctx.restore();});
  parts=parts.filter(p=>p.life>0&&p.y<innerHeight+60);
  if(parts.length) rafId=requestAnimationFrame(loopConf);
  else { cctx.clearRect(0,0,cvs.width,cvs.height); rafId=null; }
}

/* ============================================================
   УТИЛИТЫ
   ============================================================ */
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function toast(m,ms){ const t=$("#toast"); t.innerHTML=m; t.classList.add("show"); clearTimeout(t._x); t._x=setTimeout(()=>t.classList.remove("show"),ms||2300); }
function go(id){ $$(".screen").forEach(s=>s.classList.remove("active")); $(id).classList.add("active"); window.scrollTo({top:0,behavior:"smooth"}); }
function changeScore(i,delta){ teams[i].score+=delta; renderTeams(true,i); }
function rnd(a){ return a[Math.floor(Math.random()*a.length)]; }

/* ============================================================
   ВЕРХНИЕ ПАНЕЛИ
   ============================================================ */
function topbarHTML(kind){
  const r = ROUNDS.find(x=>String(x.n)===kind);
  const title = r ? "РАУНД "+r.n : "КАРТА ИГРЫ";
  const sub = r ? r.name : "выбор раунда";
  const total = r ? r.total : ROUNDS.reduce((s,x)=>s+x.total,0);
  return '<div class="brand"><b>'+title+'</b><span>'+sub+'</span></div>'+
    '<div class="spacer"></div>'+
    '<div class="prog-wrap"><div class="prog-label"><span>Прогресс</span><span data-prog="'+(r?r.n:'all')+'">0 / '+total+'</span></div>'+
    '<div class="prog"><i data-bar="'+(r?r.n:'all')+'"></i></div></div>'+
    '<button class="icon-btn" data-nav="map" title="Карта раундов">🗺️</button>'+
    '<button class="icon-btn" data-nav="sound" title="Звук">'+(muted?'🔇':'🔊')+'</button>'+
    '<button class="icon-btn" data-nav="rules" title="Правила">📖</button>';
}
function renderTopbars(){ $$("[data-tb]").forEach(t=>t.innerHTML=topbarHTML(t.dataset.tb)); }
function setProg(key,done,total){
  $$('[data-prog="'+key+'"]').forEach(e=>e.textContent=done+" / "+total);
  $$('[data-bar="'+key+'"]').forEach(e=>e.style.width=(total?done/total*100:0)+"%");
}
function refreshAllProgress(){
  setProg("all", usedR1.size+blitzDone+bagsOpen+(roundsDone[3]?1:0), ROUNDS.reduce((s,x)=>s+x.total,0));
  setProg(1,usedR1.size,30); setProg(2,blitzDone,12); setProg(3,bagsOpen,8); setProg(4,roundsDone[3]?1:0,1);
}
document.addEventListener("click",e=>{
  const nav=e.target.closest("[data-nav]"); if(!nav) return;
  const a=nav.dataset.nav;
  if(a==="map"){ sClick(); stopAllTimers(); renderMap(); go("#screen-map"); }
  if(a==="sound"){ muted=!muted; renderTopbars(); if(!muted) sClick(); toast(muted?"Звук выключен 🔇":"Звук включён 🔊"); }
  if(a==="rules"){ $("#rulesModal").classList.add("show"); sClick(); }
  if(a==="rulesClose"){ $("#rulesModal").classList.remove("show"); }
});
$("#rulesModal").addEventListener("click",e=>{ if(e.target.id==="rulesModal") e.currentTarget.classList.remove("show"); });
function stopAllTimers(){ stopTimer(); stopBlitzTimer(); }

/* ============================================================
   СТАРТОВЫЙ ЭКРАН
   ============================================================ */
const DEFS=["Команда «Пиксель»","Команда «Байт»","Команда «Процессор»","Команда «Нейрон»"];
function buildTeamInputs(){
  $("#teamInputs").innerHTML=Array.from({length:teamCount},(_,i)=>
    '<input type="text" maxlength="22" data-i="'+i+'" value="'+DEFS[i]+'" placeholder="Название команды '+(i+1)+'">').join("");
}
buildTeamInputs();
document.querySelectorAll("#countChips .chip").forEach(c=>c.addEventListener("click",()=>{
  document.querySelectorAll("#countChips .chip").forEach(x=>x.classList.remove("on"));
  c.classList.add("on"); teamCount=+c.dataset.n; buildTeamInputs(); sClick();
}));
$("#startBtn").addEventListener("click",startGame);

function startGame(){
  sClick();
  teams=Array.from({length:teamCount},(_,i)=>{
    const inp=document.querySelector('#teamInputs input[data-i="'+i+'"]');
    const nm=(inp&&inp.value.trim())?inp.value.trim():("Команда "+(i+1));
    return {name:nm,score:0,right:0,wrong:0,hints:3,color:TEAM_COLORS[i%TEAM_COLORS.length]};
  });
  activeTeam=0; currentRound=1;
  usedR1.clear(); historyR1.length=0; blitzIdx=0; blitzDone=0; blitzLog=[]; bagsOpen=0;
  roundsDone[0]=roundsDone[1]=roundsDone[2]=roundsDone[3]=false;
  renderTeams(); renderTopbars(); renderBoard(); renderBags(); refreshAllProgress();
  renderMap();
  splash(1,()=>go("#screen-map"));
}

/* ============================================================
   ТАБЛО КОМАНД
   ============================================================ */
function renderTeams(bump,idx){
  const html=teams.map((t,i)=>
    '<div class="tcard'+(i===activeTeam?" act":"")+'" data-t="'+i+'" style="--tc:'+t.color+'">'+
      '<div class="tname">'+esc(t.name)+'</div>'+
      '<div class="tscore" data-sc="'+i+'">'+t.score+'</div>'+
      '<div class="tmeta">✔ '+t.right+' · ✖ '+t.wrong+' · <span class="htok">💡'+t.hints+'</span></div>'+
      '<div class="adj"><button data-adj="-50" data-t="'+i+'">−50</button><button data-adj="50" data-t="'+i+'">+50</button></div>'+
    '</div>').join("");
  $$(".scoreboard").forEach(sb=>sb.innerHTML=html);
  if(bump&&idx!==undefined){ $$('[data-sc="'+idx+'"]').forEach(el=>{el.classList.remove("bump");void el.offsetWidth;el.classList.add("bump");}); }
  renderStandings();
}
function renderStandings(){
  const box=$("#standings"); if(!box) return;
  const max=Math.max(1,...teams.map(t=>Math.max(0,t.score)));
  const order=teams.map((t,i)=>({t,i})).sort((a,b)=>b.t.score-a.t.score);
  box.innerHTML=order.map((o,k)=>
    '<div class="st-row" style="--tc:'+o.t.color+'">'+
      '<div class="st-pos">'+(k+1)+'</div><div class="st-name">'+esc(o.t.name)+'</div>'+
      '<div class="st-bar"><i style="width:'+(Math.max(0,o.t.score)/max*100)+'%"></i></div>'+
      '<div class="st-score">'+o.t.score+'</div></div>').join("");
}
document.addEventListener("click",e=>{
  const adj=e.target.closest("[data-adj]");
  if(adj){ e.stopPropagation(); const i=+adj.dataset.t,d=+adj.dataset.adj;
    changeScore(i,d); d>0?sCorrect():sWrong(); toast(teams[i].name+": "+(d>0?"+":"")+d+" (вручную)"); return; }
  const card=e.target.closest(".tcard");
  if(card){ activeTeam=+card.dataset.t; renderTeams(); sClick(); toast("Активная команда: "+teams[activeTeam].name); }
});

/* ============================================================
   КАРТА РАУНДОВ
   ============================================================ */
function renderMap(){
  const next=roundsDone.findIndex(d=>!d);
  $("#roundsGrid").innerHTML=ROUNDS.map(r=>{
    const done=roundsDone[r.n-1];
    const isNow=(r.n-1===next);
    const cls=done?"done":(isNow?"now":"locked");
    const badge=done?'<span class="rc-badge">✔ Пройдено</span>':(isNow?'<span class="rc-badge on">Сейчас</span>':'<span class="rc-badge">🔒 Далее</span>');
    return '<button class="rcard '+cls+'" data-round="'+r.n+'" style="--c1:'+r.c1+';--c2:'+r.c2+'">'+
      '<div class="rc-num">Раунд '+r.n+'</div><div class="rc-icon">'+r.icon+'</div>'+
      '<div class="rc-title">'+r.name+'</div><div class="rc-desc">'+r.desc+'</div>'+
      '<div class="rc-foot">'+badge+(isNow?'<span class="rc-go">Начать ➜</span>':'')+'</div></button>';
  }).join("");
  renderStandings(); refreshAllProgress();
}
$("#roundsGrid").addEventListener("click",e=>{
  const c=e.target.closest("[data-round]"); if(!c) return;
  const n=+c.dataset.round;
  if(c.classList.contains("done")){ toast("Раунд «"+ROUNDS[n-1].name+"» уже пройден ✔"); sWrong(); return; }
  if(c.classList.contains("locked")){ toast("Сначала пройдите предыдущий раунд"); sWrong(); return; }
  sClick(); startRound(n);
});
$("#toResultsBtn").addEventListener("click",()=>{ sClick(); stopAllTimers(); showResults(); });

function startRound(n){
  currentRound=n;
  splash(n,()=>{
    if(n===1){ renderBoard(); go("#screen-r1"); }
    if(n===2){ startBlitz(); }
    if(n===3){ renderBags(); go("#screen-r3"); }
    if(n===4){ startAuction(); }
  });
}

/* ============================================================
   СПЛЭШ / ЗАВЕРШЕНИЕ РАУНДА
   ============================================================ */
function splash(n,cb){
  const r=ROUNDS[n-1], ov=$("#splash");
  $("#splashIn").innerHTML='<span class="splash-i">'+r.icon+'</span>'+
    '<div class="splash-rn" style="--c1:'+r.c1+'">Раунд '+r.n+'</div>'+
    '<div class="splash-t" style="background:linear-gradient(92deg,'+r.c1+','+r.c2+');-webkit-background-clip:text;background-clip:text;color:transparent">'+r.name+'</div>'+
    '<div class="splash-d">'+r.desc+'</div>';
  $("#splashIn").style.setProperty("--c1",r.c1);
  ov.classList.add("show"); sMagic();
  burst(34,innerWidth/2,innerHeight*0.3,9);
  setTimeout(()=>{ ov.classList.remove("show"); if(cb) cb(); },1700);
}
function roundComplete(n,nextAction){
  roundsDone[n-1]=true; refreshAllProgress(); renderMap();
  const order=teams.map((t,i)=>({t,i})).sort((a,b)=>b.t.score-a.t.score);
  const medals=["🥇","🥈","🥉","🎖️"];
  const isLast=n===ROUNDS.length;
  $("#rdCard").innerHTML='<div style="font-size:46px">'+ROUNDS[n-1].icon+'</div>'+
    '<h2>Раунд «'+ROUNDS[n-1].name+'» завершён!</h2>'+
    '<p>'+(isLast?'Все раунды сыграны — время подводить итоги!':'Впереди ещё '+(ROUNDS.length-n)+' раунд(а). Вот как выглядит таблица сейчас:')+'</p>'+
    '<div class="mini-stand">'+order.map((o,k)=>
      '<div class="ms" style="border-color:'+o.t.color+'55"><span>'+medals[k]+'</span><b>'+esc(o.t.name)+'</b><span>'+o.t.score+'</span></div>').join("")+'</div>'+
    '<div style="display:flex;gap:11px;justify-content:center;flex-wrap:wrap">'+
      '<button class="btn primary big" id="rdNext">'+(isLast?'🏆 К итогам':'Дальше ➜')+'</button>'+
      (isLast?'':'<button class="btn ghost" id="rdMap">🗺️ Карта раундов</button>')+'</div>';
  $("#roundDone").classList.add("show"); sWin();
  let k=0; const iv=setInterval(()=>{burst(40,Math.random()*innerWidth,innerHeight*.2+Math.random()*80,10); if(++k>5)clearInterval(iv);},400);
  $("#rdNext").addEventListener("click",()=>{ $("#roundDone").classList.remove("show"); sClick();
    if(isLast){ showResults(); } else if(nextAction){ nextAction(); } else { renderMap(); go("#screen-map"); } });
  const m=$("#rdMap"); if(m) m.addEventListener("click",()=>{ $("#roundDone").classList.remove("show"); renderMap(); go("#screen-map"); sClick(); });
}

/* ============================================================
   РАУНД 1 — СВОЯ ИГРА
   ============================================================ */
function renderBoard(){
  $("#board").innerHTML=R1.map((cat,ci)=>
    '<div class="cat" style="--h:'+cat.hue+'">'+
    '<div class="cat-head"><span class="cat-icon">'+cat.icon+'</span><span class="cat-name">'+cat.name+'</span><span class="cat-sub">'+cat.sub+'</span></div>'+
    cat.items.map((it,ii)=>{const key=ci+"-"+ii;
      return '<button class="cell'+(usedR1.has(key)?" used":"")+'" data-c="'+ci+'" data-i="'+ii+'" data-k="'+key+'"><span>'+it.v+'</span></button>';}).join("")+
    '</div>').join("");
  setProg(1,usedR1.size,30);
}
$("#board").addEventListener("click",e=>{
  const cell=e.target.closest(".cell"); if(!cell) return;
  if(cell.classList.contains("used")){ toast("Этот вопрос уже открыт."); return; }
  openR1(+cell.dataset.c,+cell.dataset.i);
});
function openR1(ci,ii){
  const cat=R1[ci], it=cat.items[ii];
  cur={mode:"r1",ci,ii,it,revealed:false,hintLevel:0,plus:it.v,minus:it.v,ev:null};
  $("#qCard").style.setProperty("--h",cat.hue);
  $("#mIcon").textContent=cat.icon;
  $("#mCat").textContent=cat.name+" · "+cat.sub;
  $("#mVal").textContent=it.v;
  prepareModal(it);
  $("#qModal").classList.add("show");
  sClick(); startTimer(TIMES[it.v]||30);
}
function prepareModal(it){
  $("#qText").textContent=it.q; $("#aText").textContent=it.a; $("#fText").textContent=it.f;
  $("#aPanel").classList.remove("show"); $("#evSlot").innerHTML="";
  $("#hintPanel").style.display="none";
  $("#footReveal").style.display="flex"; $("#footScore").style.display="none";
  updateHintBtn();
}
function startTimer(sec){
  stopTimer(); tTotal=sec; tLeft=sec;
  const fill=$("#timerFill"), wrap=$("#timerWrap");
  wrap.classList.remove("low"); fill.style.transform="scaleX(1)";
  timerId=setInterval(()=>{
    tLeft-=.1; fill.style.transform="scaleX("+Math.max(0,tLeft/tTotal)+")";
    if(tLeft<=5&&!wrap.classList.contains("low")) wrap.classList.add("low");
    if(tLeft<=5&&Math.abs(tLeft-Math.round(tLeft))<.05&&tLeft>.4) sTick();
    if(tLeft<=0){ stopTimer(); if(cur&&!cur.revealed) revealAnswer(true); }
  },100);
}
function stopTimer(){ if(timerId){clearInterval(timerId);timerId=null;} }

/* ---------- подсказки ---------- */
function updateHintBtn(){
  const b=$("#hintBtn"); if(!b||!cur) return;
  const t=teams[activeTeam];
  if(cur.hintLevel>=2 || !cur.it.h){ b.style.display="none"; return; }
  b.style.display="";
  b.disabled=t.hints<=0;
  b.innerHTML=(cur.hintLevel===0?"💡 Подсказка":"🔤 Первая буква")+" · осталось "+t.hints;
}
function useHint(){
  if(!cur||cur.revealed) return;
  const t=teams[activeTeam];
  if(t.hints<=0){ toast("У команды «"+t.name+"» закончились подсказки 💡"); sWrong(); return; }
  if(!cur.it.h){ toast("К этому вопросу подсказки нет"); return; }
  t.hints--; cur.hintLevel++;
  const box=$("#hintPanel"); box.style.display="block";
  if(cur.hintLevel===1){
    box.innerHTML='<div class="fl">💡 Подсказка команды «'+esc(t.name)+'»</div><div>'+esc(cur.it.h)+'</div>';
  }else{
    const ans=cur.it.a.replace(/\s*[({[].*/,"").trim();
    const letters=ans.split(/\s+/).map(w=>w.length).join(" + ");
    box.innerHTML='<div class="fl">🔤 Первая буква ответа</div><div>Ответ начинается на «<b style="font-size:20px;color:#fff">'+esc(ans[0]||"?")+'</b>», длина: '+letters+' символов.</div>';
  }
  renderTeams(); updateHintBtn(); sReveal();
  toast("Подсказка использована! Ост. "+t.hints);
}
$("#hintBtn").addEventListener("click",useHint);
$("#revealBtn").addEventListener("click",()=>revealAnswer());

function revealAnswer(byTimer){
  if(!cur||cur.revealed) return;
  cur.revealed=true; stopTimer();
  $("#aPanel").classList.add("show");
  $("#footReveal").style.display="none";
  $("#footScore").style.display="block";
  renderScoreButtons();
  if(byTimer) toast("Время вышло! Показываем ответ ⏱️");
  sReveal();
}

function renderScoreButtons(){
  const row=$("#scoreRow"); if(!row||!cur) return;
  row.innerHTML=teams.map((t,i)=>{
    const act=i===activeTeam;
    let p=cur.plus, m=cur.minus;
    if(cur.ev){
      if(cur.ev.id==="x2"){ p*=2; m*=2; }
      if(cur.ev.id==="prize"){ p+=200; }
      if(cur.ev.id==="safe"){ m=0; }
    }
    return '<div class="srow'+(act?" act":"")+'" style="--tc:'+t.color+'">'+
      '<div class="nm">'+esc(t.name)+'</div>'+
      '<button class="plus" onclick="awardR1('+i+','+p+',true)">+'+p+'</button>'+
      '<button class="minus" onclick="awardR1('+i+','+m+',false)">'+(m>0?'−'+m:'0')+'</button>'+
      '</div>';
  }).join("");
}

function awardR1(ti,pts,isPlus){
  if(!cur) return;
  const t=teams[ti];
  if(isPlus){
    t.score+=pts; t.right++; sCorrect(); burst(28);
    if(cur.ev&&cur.ev.id==="all"){ teams.forEach(x=>x.score+=100); toast("🤝 Командный бонус: всем +100!"); }
    toast("Верно! "+t.name+" получает +"+pts+" 🎉");
  }else{
    if(pts>0){ t.score-=pts; t.wrong++; sWrong(); toast("Ошибка! "+t.name+" теряет "+pts+" 💥"); }
    else { toast(t.name+": ошибка без штрафа (🛡️️ Щит)"); sWrong(); }
  }
  renderTeams(true,ti);
  if(cur.mode==="r1"){
    usedR1.add(cur.ci+"-"+cur.ii);
    renderBoard(); refreshAllProgress();
  }else if(cur.mode==="bag"){
    bags[cur.bagIdx].open=true; bagsOpen++;
    renderBags(); refreshAllProgress();
  }
  closeModal();
  if(cur.mode==="r1"&&usedR1.size>=30){ setTimeout(()=>roundComplete(1),400); }
  if(cur.mode==="bag"&&bagsOpen>=8){ setTimeout(()=>roundComplete(3),400); }
}

function closeModal(){
  stopTimer(); $("#qModal").classList.remove("show"); cur=null;
}
$("#nextBtn").addEventListener("click",()=>{
  if(cur&&cur.mode==="r1"){ usedR1.add(cur.ci+"-"+cur.ii); renderBoard(); refreshAllProgress(); }
  if(cur&&cur.mode==="bag"){ bags[cur.bagIdx].open=true; bagsOpen++; renderBags(); refreshAllProgress(); }
  closeModal();
  if(usedR1.size>=30&&currentRound===1) roundComplete(1);
  if(bagsOpen>=8&&currentRound===3) roundComplete(3);
});

/* ============================================================
   РАУНД 2 — БЛИЦ
   ============================================================ */
function startBlitz(){
  blitzIdx=0; blitzDone=0; blitzLog=[];
  renderBlitzDots(); showBlitzQuestion(); go("#screen-r2");
}
function renderBlitzDots(){
  $("#blitzDots").innerHTML=R2.map((_,i)=>{
    let cls="dot";
    if(i<blitzIdx) cls+=blitzLog[i]?" ok":" no";
    if(i===blitzIdx) cls+=" cur";
    return '<div class="'+cls+'"></div>';
  }).join("");
}
function showBlitzQuestion(){
  if(blitzIdx>=R2.length){ stopBlitzTimer(); roundComplete(2); return; }
  const q=R2[blitzIdx];
  $("#blitzIdx").textContent=blitzIdx+1;
  $("#blitzQ").textContent=q.q;
  $("#blitzAT").textContent=q.a;
  $("#blitzF").textContent=q.f;
  $("#blitzA").classList.remove("show");
  $("#blitzHintBox").style.display="none";
  $("#blitzFoot1").style.display="flex";
  $("#blitzFoot2").style.display="none";
  const hb=$("#blitzHintBtn");
  hb.style.display=q.h?"":"none";
  hb.disabled=teams[activeTeam].hints<=0;
  hb.innerHTML="💡 Подсказка · ост. "+teams[activeTeam].hints;
  renderBlitzDots();
  startBlitzTimer(15);
}
function startBlitzTimer(sec){
  stopBlitzTimer(); blitzLeft=sec;
  const ring=$("#blitzRing"), num=$("#blitzNum");
  ring.classList.remove("low"); ring.style.setProperty("--p","100"); num.textContent=sec;
  blitzTimer=setInterval(()=>{
    blitzLeft-=.1;
    const p=Math.max(0,blitzLeft/sec*100);
    ring.style.setProperty("--p",p);
    num.textContent=Math.ceil(blitzLeft);
    if(blitzLeft<=5&&!ring.classList.contains("low")) ring.classList.add("low");
    if(blitzLeft<=5&&Math.abs(blitzLeft-Math.round(blitzLeft))<.05&&blitzLeft>.3) sTick();
    if(blitzLeft<=0){ stopBlitzTimer(); revealBlitz(true); }
  },100);
}
function stopBlitzTimer(){ if(blitzTimer){clearInterval(blitzTimer);blitzTimer=null;} }

$("#blitzHintBtn").addEventListener("click",()=>{
  const t=teams[activeTeam], q=R2[blitzIdx];
  if(t.hints<=0){ toast("У команды «"+t.name+"» нет подсказок 💡"); sWrong(); return; }
  t.hints--;
  $("#blitzHintT").textContent=q.h;
  $("#blitzHintBox").style.display="block";
  renderTeams();
  $("#blitzHintBtn").disabled=t.hints<=0;
  $("#blitzHintBtn").innerHTML="💡 Подсказка · ост. "+t.hints;
  sReveal(); toast("Подсказка использована!");
});

$("#blitzReveal").addEventListener("click",()=>revealBlitz(false));
$("#blitzSkip").addEventListener("click",()=>{
  sClick(); stopBlitzTimer(); blitzLog[blitzIdx]=false; blitzIdx++; blitzDone++; setProg(2,blitzDone,12);
  if(blitzIdx>=R2.length) roundComplete(2); else showBlitzQuestion();
});

function revealBlitz(byTimer){
  stopBlitzTimer();
  $("#blitzA").classList.add("show");
  $("#blitzFoot1").style.display="none";
  $("#blitzFoot2").style.display="block";
  renderBlitzScoreRow();
  if(byTimer) toast("Время вышло! Показываем ответ ⏱️");
  sReveal();
}

function renderBlitzScoreRow(){
  $("#blitzScoreRow").innerHTML=teams.map((t,i)=>
    '<div class="srow'+(i===activeTeam?" act":"")+'" style="--tc:'+t.color+'">'+
      '<div class="nm">'+esc(t.name)+'</div>'+
      '<button class="plus" onclick="awardBlitz('+i+',true)">+100</button>'+
      '<button class="minus" onclick="awardBlitz('+i+',false)">−50</button>'+
    '</div>').join("");
}

function awardBlitz(ti,isPlus){
  const t=teams[ti];
  if(isPlus){ t.score+=100; t.right++; blitzLog[blitzIdx]=true; sCorrect(); burst(22); toast(t.name+": +100! 🎉"); }
  else{ t.score-=50; t.wrong++; blitzLog[blitzIdx]=false; sWrong(); toast(t.name+": −50 💥"); }
  renderTeams(true,ti);
  blitzIdx++; blitzDone++; setProg(2,blitzDone,12); refreshAllProgress();
  if(blitzIdx>=R2.length) roundComplete(2); else showBlitzQuestion();
}
$("#blitzNext").addEventListener("click",()=>{
  blitzLog[blitzIdx]=false; blitzIdx++; blitzDone++; setProg(2,blitzDone,12); refreshAllProgress();
  if(blitzIdx>=R2.length) roundComplete(2); else showBlitzQuestion();
});

/* ============================================================
   РАУНД 3 — КОТ В МЕШКЕ
   ============================================================ */
function renderBags(){
  if(!bags.length){
    bags=R3.map((it,i)=>({
      id:i, q:it, open:false,
      val:rnd([100,200,300,400,500]),
      ev:rnd(EVENTS)
    }));
  }
  $("#bags").innerHTML=bags.map((b,i)=>
    '<button class="bag'+(b.open?" open":"")+'" data-b="'+i+'">'+
      '<span class="qm">'+(b.open?"✓":"?")+'</span>'+
      '<span class="tip">'+(b.open?"Открыт":"Мешок "+(i+1))+'</span>'+
    '</button>').join("");
  setProg(3,bagsOpen,8);
}
$("#bags").addEventListener("click",e=>{
  const b=e.target.closest(".bag"); if(!b) return;
  const idx=+b.dataset.b;
  if(bags[idx].open){ toast("Этот мешок уже открыт!"); return; }
  openBag(idx);
});
function openBag(idx){
  const bg=bags[idx], ev=bg.ev;
  cur={mode:"bag",bagIdx:idx,it:bg.q,revealed:false,hintLevel:0,plus:bg.val,minus:bg.val,ev};
  $("#qCard").style.setProperty("--h",200);
  $("#mIcon").textContent="🎁";
  $("#mCat").textContent="Кот в мешке · Мешок "+(idx+1);
  $("#mVal").textContent=bg.val;
  prepareModal(bg.q);
  $("#evSlot").innerHTML='<div class="evbox"><span class="em">'+ev.icon+'</span><b>Событие: '+ev.name+'</b><span>'+ev.desc+'</span></div>';
  $("#qModal").classList.add("show");
  sMagic(); startTimer(TIMES[bg.val]||30);
}

/* ============================================================
   РАУНД 4 — ФИНАЛЬНЫЙ АУКЦИОН
   ============================================================ */
function startAuction(){
  aucStage="bet"; aucBets={}; aucAnswered={};
  aucFinal=rnd(FINALS);
  teams.forEach((_,i)=>aucBets[i]=100);
  renderAuction(); go("#screen-r4");
}
function renderAuction(){
  const body=$("#aucBody"), act=$("#aucActions");
  if(aucStage==="bet"){
    body.innerHTML='<div style="font-family:\'Unbounded\';font-size:18px;text-align:center;margin-bottom:18px">Делайте ставки, господа!</div>'+
      '<div class="bet-grid">'+teams.map((t,i)=>{
        const maxB=Math.max(100,t.score);
        const b=aucBets[i]||100;
        return '<div class="bet" style="border-color:'+t.color+'"><div class="bn" style="color:'+t.color+'">'+esc(t.name)+'</div>'+
          '<div class="bs">Баланс: '+t.score+' баллов</div><div class="bv">'+b+'</div>'+
          '<div class="bctrl">'+
            '<button onclick="adjBet('+i+',-50)">−50</button>'+
            '<button onclick="adjBet('+i+',50)">+50</button>'+
            '<button onclick="adjBet('+i+',200)">+200</button>'+
            '<button onclick="allIn('+i+')" style="border-color:var(--gold);color:var(--gold)">Ва-банк!</button>'+
          '</div></div>';
      }).join("")+'</div>';
    act.innerHTML='<div style="text-align:center"><button class="btn gold big" id="startAucQ">🔥 Принять ставки и открыть вопрос</button></div>';
    $("#startAucQ").onclick=()=>{ sClick(); aucStage="question"; renderAuction(); };
  } else if(aucStage==="question"){
    body.innerHTML='<div class="qcard"><div class="qtag">Финал · Тема: «'+aucFinal.theme+'»</div>'+
      '<div class="qbig">'+aucFinal.q+'</div>'+
      '<div class="revealable" id="aucA">'+
        '<div class="a-label">✔ Правильный ответ</div><div class="a-text">'+aucFinal.a+'</div>'+
        '<div class="fact"><div class="fl">💡 Знаете ли вы?</div><div>'+aucFinal.f+'</div></div>'+
      '</div></div>';
    act.innerHTML='<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">'+
      '<button class="btn primary big" id="aucRev">👁 Показать ответ</button></div>';
    $("#aucRev").onclick=()=>{ sReveal(); $("#aucA").classList.add("show"); aucStage="result"; renderAuction(); };
  } else if(aucStage==="result"){
    body.innerHTML='<div class="qcard"><div class="qtag">Финал · Тема: «'+aucFinal.theme+'»</div>'+
      '<div class="qbig" style="font-size:20px;color:var(--mut)">'+aucFinal.q+'</div>'+
      '<div class="a-label" style="margin-top:14px">✔ Правильный ответ</div><div class="a-text">'+aucFinal.a+'</div>'+
      '<div class="fact"><div class="fl">💡 Знаете ли вы?</div><div>'+aucFinal.f+'</div></div>'+
      '<div style="margin-top:22px"><div class="a-label" style="color:var(--gold)">Отметки команд</div>'+
      '<div class="score-row" style="margin-top:8px">'+teams.map((t,i)=>{
        const bet=aucBets[i]||100;
        const done=aucAnswered[i]!==undefined;
        return '<div class="srow" style="--tc:'+t.color+'"><div class="nm">'+esc(t.name)+' ('+bet+')</div>'+
          '<button class="plus" '+(done?'disabled':'')+' onclick="awardAuc('+i+',true)">+'+bet+'</button>'+
          '<button class="minus" '+(done?'disabled':'')+' onclick="awardAuc('+i+',false)">−'+bet+'</button>'+
          '</div>';
      }).join("")+'</div></div></div>';
    act.innerHTML='<div style="text-align:center"><button class="btn gold big" id="finishAuc">🏆 Завершить игру и подвести итоги</button></div>';
    $("#finishAuc").onclick=()=>{ sClick(); roundsDone[3]=true; refreshAllProgress(); showResults(); };
  }
}
function adjBet(i,delta){
  const t=teams[i]; const maxB=Math.max(100,t.score);
  let cur=(aucBets[i]||100)+delta;
  if(cur<50) cur=50; if(cur>maxB&&maxB>50) cur=maxB;
  aucBets[i]=cur; sClick(); renderAuction();
}
function allIn(i){
  const t=teams[i];
  aucBets[i]=Math.max(100,t.score); sMagic(); toast(t.name+": ВА-БАНК! 🔥"); renderAuction();
}
function awardAuc(i,isPlus){
  const t=teams[i], b=aucBets[i]||100;
  if(isPlus){ t.score+=b; t.right++; sCorrect(); burst(30); toast(t.name+": +"+b+"! 🎉"); }
  else { t.score-=b; t.wrong++; sWrong(); toast(t.name+": −"+b+" 💥"); }
  aucAnswered[i]=isPlus; renderTeams(true,i); renderAuction();
}

/* ============================================================
   ИТОГИ
   ============================================================ */
function showResults(){
  go("#screen-result");
  const order=teams.map((t,i)=>({t,i})).sort((a,b)=>b.t.score-a.t.score);
  const win=order[0];
  $("#resTitle").textContent="Победитель: "+win.t.name+"! 🎉";
  $("#resSub").textContent="Результат: "+win.t.score+" баллов. Поздравляем победителей и всех участников!";
  const medals=["🥇","🥈","🥉","🎖️"];
  $("#podium").innerHTML=order.map((o,k)=>
    '<div class="pcol'+(k===0?" first":"")+'" style="border-color:'+o.t.color+'">'+
      '<div class="med">'+medals[k]+'</div>'+
      '<div class="pn" style="color:'+o.t.color+'">'+esc(o.t.name)+'</div>'+
      '<div class="ps">'+o.t.score+'</div>'+
      '<div class="pd">Правильных: '+o.t.right+'<br>Ошибок: '+o.t.wrong+'</div></div>').join("");
  sWin(); burst(90,innerWidth/2,innerHeight/2,14);
}
$("#againBtn").addEventListener("click",()=>{ sClick(); startGame(); });
$("#homeBtn").addEventListener("click",()=>{ sClick(); go("#screen-start"); });

/* ============================================================
   ГОРЯЧИЕ КЛАВИШИ
   ============================================================ */
addEventListener("keydown",e=>{
  if($("#qModal").classList.contains("show")){
    if(e.code==="Space"&&cur&&!cur.revealed){ e.preventDefault(); revealAnswer(); }
    if(e.code==="KeyH"&&cur&&!cur.revealed){ e.preventDefault(); useHint(); }
    if(e.code==="Escape"){ closeModal(); }
  }
});