function search() {
    
    var email = document.getElementById('email').Value;
    var password = document.getElementById('password').Value;

    let user = [
        { name: 'hardy', age: 10, color:  },
        { name: 'vusumuzi', age: 21, color:  },
        { name: 'wandile', age: 65, color:  },
        { name: 'charity', age: 28, color:  },
        { name: 'precious', age: 17, color:  },
        { name: 'andisiwe', age: 90, color: },
        { name: 'mmapaseka', age: 30, color:  },
        { name: 'mhlonipheni', age: 20, color:  },
        { name: 'khumbulani', age: 30, color:  },
        { name: 'sophie', age: 18, color:  },
        { name: 'lucky', age: 32, color:  },
        { name: 'sithembiso', age: 32, color:  },
        { name: 'happy', age: 18, color:  },
        { name: 'selina', age: 26, color: ' },
        { name: 'nkosiphendule', age: 30, color: 'white', hairStyle: 'chiskop' },
        { name: 'thato', age: 30, color: 'green', hairStyle: 'chiskop' },
      ];
      display.innerHTML = '';
    
      for (let i = 0; i < people.length; i++) {
        if (people[i].name == name) {
          display.innerHTML += '<li>' + people[i].name + '</li>';
        }
      }
    }
