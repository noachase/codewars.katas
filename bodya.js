let addExp = 'Театр,кино,ресторан';
        
        let addExpenses = addExp.substring().toLowerCase().split(',');
        for (let i = 0; i < addExpenses.length; i++) {
            addExpenses[i] = addExpenses[i].charAt(0).toUpperCase(i) + addExpenses[i].substring(1);
        }

    addExpenses.join(' ');

    console.log(addExpenses);
        
        // appData.addExpenses = addExpenses;