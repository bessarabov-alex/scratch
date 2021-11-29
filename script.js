//объявление глобальных переменных
//mass-хранит значение блок-ссылка
//i-глобальный счетчик
let mass=[];
let url2;
let i=0;
//----------------------
//загрузка изображения в фон карточки главной
function loadImg(element){
  //получаем текущий id, с которого вызвали функцию
  //приводим к одному типу, для булевых операций
  var ch = Number(element.id);
  //перебор, пока не найдем блок, с которого был вызов
  for(i2=0;ch!=(i2-1);i2++){ 
    if(ch==i2){
      //получаем ссылку из массива и выводим нужное изображение в блок result
      url2=mass[i2].name;
      var img="<img class=new-cat src='"+url2+"' height=300 width=350/>";
      document.getElementById('result').innerHTML=img;
    }
  }
  //скрываем блок картинок и выводим детальный блок
  $(".cards").css("display", "none");
  $(".detail-page").css("display", "block");
}
//----------------------
function mainLoad(){
    //заполняем все блоки изображениями
    //после перебора всех id, выходим из цикла
    firstLoad();
}
//----------------------
//одиночный вывод изображения по id, перебором i
function firstLoad(){
    //получаем ссылку из api
    var link=`https://api.thecatapi.com/v1/images/search`;
        fetch(link)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log(data);
            var url=data[0].url;
            var img="<img class=new-cat src='"+url+"' height=300 width=350/>";
            document.getElementById(i).innerHTML=img;
          //заполняем массив по ключу - значем ссылки
          mass[i]={name:url}; 
          //глобальный счетчик 
          i++;
          mainLoad();
        });
}