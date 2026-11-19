let arr = [];

      do {
        let cislo = Number(window.prompt("zadej číslo"));
        arr.push(cislo);
      } while (cislo != 0);
      alert(arr);