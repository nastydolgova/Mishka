'use strict';

    let formBtn = document.querySelector('.form__button');
    let inputs = document.querySelectorAll('.form__input');

    let orders = [];
    
    formBtn.addEventListener('click', addOrder);
    
    function addOrder(e){
        e.preventDefault();
        let newOrder = new Order('Type', 'Color', 'Name', 'Surname', 'MiddleName', 'Phone', 'Mail', 'Comment')
        orders.push(newOrder)
        alert("Заказ успешно отправлен в консоль!");
        console.log(newOrder)
        console.log(orders)
    }

    class Order {
        constructor (type, color, name, surname, middleName, phone, mail, comment){
            this.Type = this._check(type)
            this.Color = this._getArray(color);
            this.Name = this._text(name);
            this.Surname = this._text(surname);
            this.MiddleName = this._text(middleName);
            this.Phone = this._text(phone);
            this.Mail = this._text(mail);
            this.Comment = this._textArea(comment);
        }
        _check(attrName) {
            let obj = document.querySelector(`input[name=${attrName}]:checked`);
            return obj.value;
          }

          _getArray(attrName) {
            let objArr = [
              ...document.querySelectorAll(`input[name=${attrName}]:checked`),
            ];
            let arr = [];
            objArr.forEach((el) => {
              arr.push(el.value);
            });
            return arr;
          }

          _text(attrName) {
            let obj = document.querySelector(`input[name=${attrName}]`);
            return obj.value;
          }
         
          _textArea(attrName) {
            let obj = document.querySelector(`textarea[name=${attrName}]`);
            return obj.value;
          }
    }




