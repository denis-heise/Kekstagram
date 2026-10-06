const localPhotos = [
  {
    id: 1,
    url: 'photos/1.jpg',
    description: 'Прекрасный завтрак на берегу океана.',
    likes: 142,
    comments: [
      { id: 101, avatar: 'img/avatar-1.svg', message: 'Очень крутое фото!', name: 'Иван' },
      { id: 102, avatar: 'img/avatar-2.svg', message: 'Какая красота, завидую.', name: 'Мария' }
    ]
  },
  {
    id: 2,
    url: 'photos/2.jpg',
    description: 'Мой новый домашний питомец.',
    likes: 89,
    comments: [
      { id: 103, avatar: 'img/avatar-3.svg', message: 'Какой милашка!', name: 'Ольга' }
    ]
  },
  {
    id: 3,
    url: 'photos/3.jpg',
    description: 'Вечерний Токио прекрасен.',
    likes: 310,
    comments: [
      { id: 104, avatar: 'img/avatar-4.svg', message: 'Ого, сколько лайков!', name: 'Алексей' },
      { id: 105, avatar: 'img/avatar-5.svg', message: 'Мечтаю туда съездить.', name: 'Дмитрий' },
      { id: 106, avatar: 'img/avatar-6.svg', message: 'Просто шедевр.', name: 'Елена' }
    ]
  },
  {
    id: 4,
    url: 'photos/4.jpg',
    description: 'Лучший кофе в моей жизни.',
    likes: 215,
    comments: []
  },
  {
    id: 5,
    url: 'photos/5.jpg',
    description: 'Выходные в горах, чистый воздух.',
    likes: 175,
    comments: [
      { id: 107, avatar: 'img/avatar-1.svg', message: 'Хорошего отдыха!', name: 'Артем' }
    ]
  },
  {
    id: 6,
    url: 'photos/6.jpg',
    description: 'Новый худи, зацените стиль.',
    likes: 94,
    comments: [
      { id: 108, avatar: 'img/avatar-2.svg', message: 'Тебе очень идет этот цвет.', name: 'Анна' },
      { id: 109, avatar: 'img/avatar-3.svg', message: 'Где покупал?', name: 'Кирилл' }
    ]
  },
  {
    id: 7,
    url: 'photos/7.jpg',
    description: 'Мой идеальный рабочий стол разработчика.',
    likes: 420,
    comments: [
      { id: 110, avatar: 'img/avatar-4.svg', message: 'Монитор просто пушка.', name: 'Сергей' },
      { id: 111, avatar: 'img/avatar-5.svg', message: 'Чистый кайф, минималистично.', name: 'Павел' },
      { id: 112, avatar: 'img/avatar-6.svg', message: 'Какая клавиатура?', name: 'Ирина' }
    ]
  },
  {
    id: 8,
    url: 'photos/8.jpg',
    description: 'Прогулка по осеннему парку.',
    likes: 130,
    comments: []
  },
  {
    id: 9,
    url: 'photos/9.jpg',
    description: 'Домашняя пицца получилась сочной!',
    likes: 260,
    comments: [
      { id: 113, avatar: 'img/avatar-1.svg', message: 'Поделись рецептом теста!', name: 'Наталья' }
    ]
  },
  {
    id: 10,
    url: 'photos/10.jpg',
    description: 'Вид из иллюминатора, лечу навстречу приключениям.',
    likes: 380,
    comments: [
      { id: 114, avatar: 'img/avatar-2.svg', message: 'Мягкой посадки!', name: 'Светлана' },
      { id: 115, avatar: 'img/avatar-3.svg', message: 'Куда летишь?', name: 'Михаил' }
    ]
  },
  {
    id: 11,
    url: 'photos/11.jpg',
    description: 'Утренний туман над озером.',
    likes: 155,
    comments: []
  },
  {
    id: 12,
    url: 'photos/12.jpg',
    description: 'Наконец-то дошли руки до этой книги.',
    likes: 72,
    comments: [
      { id: 116, avatar: 'img/avatar-4.svg', message: 'Стоит читать? Тоже планирую.', name: 'Егор' }
    ]
  },
  {
    id: 13,
    url: 'photos/13.jpg',
    description: 'Закат на крыше, романтика.',
    likes: 290,
    comments: [
      { id: 117, avatar: 'img/avatar-5.svg', message: 'Цвета просто нереальные.', name: 'Алина' },
      { id: 118, avatar: 'img/avatar-6.svg', message: 'Потрясающий кадр!', name: 'Кристина' }
    ]
  },
  {
    id: 14,
    url: 'photos/14.jpg',
    description: 'Уличный музыкант в старом городе.',
    likes: 112,
    comments: []
  },
  {
    id: 15,
    url: 'photos/15.jpg',
    description: 'Мой первый заплыв на сап-серфе.',
    likes: 198,
    comments: [
      { id: 119, avatar: 'img/avatar-1.svg', message: 'Круто! Сложно баланс держать?', name: 'Роман' },
      { id: 120, avatar: 'img/avatar-2.svg', message: 'Тоже хочу попробовать.', name: 'Татьяна' }
    ]
  },
  {
    id: 16,
    url: 'photos/16.jpg',
    description: 'Свежие ягоды с фермерского рынка.',
    likes: 145,
    comments: [
      { id: 121, avatar: 'img/avatar-3.svg', message: 'Выглядит очень аппетитно.', name: 'Виктория' }
    ]
  },
  {
    id: 17,
    url: 'photos/17.jpg',
    description: 'Архитектура старой Праги завораживает.',
    likes: 340,
    comments: [
      { id: 122, avatar: 'img/avatar-4.svg', message: 'Обожаю этот город.', name: 'Никита' },
      { id: 123, avatar: 'img/avatar-5.svg', message: 'Атмосферно получилось.', name: 'Юлия' },
      { id: 124, avatar: 'img/avatar-6.svg', message: 'Сделай побольше фото!', name: 'Денис' }
    ]
  },
  {
    id: 18,
    url: 'photos/18.jpg',
    description: 'Кот контролирует процесс сборки мебели.',
    likes: 230,
    comments: [
      { id: 125, avatar: 'img/avatar-1.svg', message: 'Главный прораб на месте ))', name: 'Антон' }
    ]
  },
  {
    id: 19,
    url: 'photos/19.jpg',
    description: 'Ночной костер, песни под гитару.',
    likes: 185,
    comments: []
  },
  {
    id: 20,
    url: 'photos/20.jpg',
    description: 'Урбанистический пейзаж, стекло и бетон.',
    likes: 125,
    comments: [
      { id: 126, avatar: 'img/avatar-2.svg', message: 'Геометрия кадра отличная.', name: 'Максим' }
    ]
  },
  {
    id: 21,
    url: 'photos/21.jpg',
    description: 'Мой первый полумарафон! Сделал это!',
    likes: 512,
    comments: [
      { id: 127, avatar: 'img/avatar-3.svg', message: 'Горжусь тобой! Мега-крут!', name: 'Валерия' },
      { id: 128, avatar: 'img/avatar-4.svg', message: 'Мощный результат, поздравляю!', name: 'Стас' },
      { id: 129, avatar: 'img/avatar-5.svg', message: 'Вот это мотивация!', name: 'Владимир' },
      { id: 130, avatar: 'img/avatar-6.svg', message: 'Красавчик, только вперед!', name: 'Олег' }
    ]
  },
  {
    id: 22,
    url: 'photos/22.jpg',
    description: 'Цветение сакуры в парке.',
    likes: 275,
    comments: [
      { id: 131, avatar: 'img/avatar-1.svg', message: 'Какое нежное фото.', name: 'Евгения' }
    ]
  },
  {
    id: 23,
    url: 'photos/23.jpg',
    description: 'Ароматный домашний круассан к чаю.',
    likes: 160,
    comments: []
  },
  {
    id: 24,
    url: 'photos/24.jpg',
    description: 'Огни вечернего фестиваля.',
    likes: 205,
    comments: [
      { id: 132, avatar: 'img/avatar-2.svg', message: 'Праздник чувствуется!', name: 'Лариса' },
      { id: 133, avatar: 'img/avatar-3.svg', message: 'Ярко и сочно.', name: 'Вадим' }
    ]
  },
  {
    id: 25,
    url: 'photos/25.jpg',
    description: 'Наедине с мыслями, где-то в лесу.',
    likes: 190,
    comments: [
      { id: 134, avatar: 'img/avatar-4.svg', message: 'Иногда это очень нужно.', name: 'Карина' }
    ]
  }
];

export { localPhotos };
