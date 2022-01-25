function search() {
    
    var email = document.getElementById('email').Value;
    var password = document.getElementById('password').Value;

    let user = [
        { name: 'thembi', age: 30, },
        { name: 'vusumuzi', age: 21, },
        { name: 'wandile', age: 65,},
        { name: 'charity', age: 28, },
        { name: 'precious', age: 17,},
        { name: 'andisiwe', age: 90,},
        { name: 'mmapaseka', age: 30, },
        { name: 'mhlonipheni', age: 20, },
        { name: 'khumbulani', age: 30,},
        { name: 'sophie', age: 18,},
        { name: 'lucky', age: 32, },
        { name: 'sithembiso', age: 32,},
        { name: 'happy', age: 18,},
        { name: 'selina', age: 26,},
        { name: 'nkosiphendule', age: 30,},
        { name: 'hardy', age: 30,},
      ];
      display.innerHTML = '';
    
    
      for (let i = 0; i < user.length; i++) {
        if (user[i].email == email) {
          display.innerHTML += '<li>' + user[i].email + ", " + password +  '</li>';
        }
      }
    }
