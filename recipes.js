window.recipes = {
    burger: {
        id: "burger",
        title: "Burger",
        tags: ["Fast food", "Mięso", "Trudne", "40-99 zł"],
        timeFilter: "short",
        difficultyFilter: "hard",
        costFilter: "medium",
        time: "30 minut",
        portions: "4",
        image: "burger.jpg",
        ingredients: ["Bułki", "Mięso wołowe", "Ser", "Pomidor", "Sałata"],
        instructions: [
            "Grilluj mięso.",
            "Przygotuj warzywa.",
            "Złóż burgera w bułce."
        ]
    },
    "pizza-margherita": {
        id: "pizza-margherita",
        title: "Pizza Margherita",
        tags: ["Włoska", "Pizza", "Średnie", "40-99 zł"],
        timeFilter: "medium",
        difficultyFilter: "medium",
        costFilter: "medium",
        time: "1 godzina",
        portions: "2",
        image: "pizza.jpg",
        ingredients: [
            "300g mąki",
            "150ml wody",
            "20g drożdży",
            "250g mozzarelli",
            "200g pomidorów"
        ],
        instructions: [
            "Wymieszaj drożdże z wodą i odstaw na 10 minut.",
            "Dodaj mąkę i wyrabiaj ciasto.",
            "Rozwałkuj ciasto, dodaj dodatki.",
            "Piecz w piekarniku przez 15 minut w 220°C."
        ]
    },
    tiramisu: {
        id: "tiramisu",
        title: "Tiramisu",
        tags: ["Włoska", "Deser", "Łatwe", "40-99 zł"],
        timeFilter: "medium",
        difficultyFilter: "easy",
        costFilter: "cheap",
        time: "40 minut",
        portions: "4",
        image: "tiramisu.jpg",
        ingredients: [
            "3 jajka",
            "250g mascarpone",
            "150g cukru",
            "200ml kawy",
            "Biszkopty"
        ],
        instructions: [
            "Ubij żółtka z cukrem na puszystą masę.",
            "Dodaj mascarpone i wymieszaj.",
            "Zanurz biszkopty w kawie i układaj w naczyniu warstwami z kremem.",
            "Schładzaj w lodówce przez co najmniej 4 godziny."
        ]
    },
    "pieczone-warzywa-z-serem": {
        id: "pieczone-warzywa-z-serem",
        title: "Pieczone Warzywa z Serem",
        tags: ["Wegetariańska", "Warzywa", "Łatwe", "0-39 zł"],
        timeFilter: "short",
        difficultyFilter: "easy",
        costFilter: "cheap",
        time: "45 minut",
        portions: "4",
        image: "roasted_veggies.jpeg",
        ingredients: [
            "1kg warzyw (ziemniaki, marchewka, cukinia)",
            "100g sera żółtego",
            "3 łyżki oliwy",
            "Przyprawy do smaku"
        ],
        instructions: [
            "Pokrój warzywa na kawałki i wymieszaj z oliwą oraz przyprawami.",
            "Rozłóż warzywa na blaszce wyłożonej papierem do pieczenia.",
            "Piecz w temperaturze 200°C przez 30 minut.",
            "Posyp serem żółtym i zapiecz dodatkowe 5 minut."
        ]
    },
    'beza-pavlova': {
        id: "beza-pavlova",
        title: "Beza Pavlova",
        tags: ["Deser", "Beza", "Trudne", "40-99 zł"],
        timeFilter: "long",
        difficultyFilter: "hard",
        costFilter: "medium",
        time: "2 godziny",
        portions: "8",
        image: "pavlova.JPG",
        ingredients: [
            "4 białka jaj",
            "200g cukru",
            "1 łyżeczka octu",
            "1 łyżeczka mąki ziemniaczanej",
            "Bita śmietana",
            "Owoce (granat, ananas)"
        ],
        instructions: [
            "Ubij białka na sztywną pianę, stopniowo dodając cukier.",
            "Delikatnie wmieszaj mąkę ziemniaczaną i ocet.",
            "Uformuj okrąg na papierze do pieczenia.",
            "Piecz w piekarniku w temperaturze 120°C przez 1,5 godziny.",
            "Ozdób bitą śmietaną i owocami."
        ]
    },
    'makaron-azjatycki': {
        id: "makaron-azjatycki",
        title: "Makaron Azjatycki",
        tags: ["Azjatycka", "Makaron", "Łatwe", "0-39 zł"],
        timeFilter: "short",
        difficultyFilter: "easy",
        costFilter: "cheap",
        time: "25 minut",
        portions: "2",
        image: "noodles.jpeg",
        ingredients: [
            "200g makaronu ryżowego",
            "2 marchewki",
            "50ml sosu sojowego",
            "1 łyżka sezamu",
            "1 cebula"
        ],
        instructions: [
            "Ugotuj makaron według instrukcji na opakowaniu.",
            "Pokrój warzywa w cienkie paski i podsmaż na patelni.",
            "Dodaj sos sojowy i sezam, a następnie wymieszaj z makaronem.",
            "Podawaj na gorąco."
        ]
    },
    "kurczak-po-koreańsku": {
        id: "kurczak-po-koreańsku",
        title: "Kurczak po koreańsku",
        tags: ["Azjatycka", "Kurczak", "Średnie", "40-99 zł"],
        timeFilter: "medium",
        difficultyFilter: "medium",
        costFilter: "medium",
        time: "1 godzina",
        portions: "2",
        image: "korean_chicken.jpeg",
        ingredients: [
            "300g kurczaka",
            "Sól i pieprz",
            "1 łyżka sosu sojowego",
            "1 łyżka ostrego sosu Gochujang",
            "2 łyżki miodu",
            "2 ząbki czosnku",
            "1 łyżka oleju sezamowego"
        ],
        instructions: [
            "Pokrój kurczaka na kawałki.",
            "Dopraw solą i pieprzem.",
            "Przygotuj sos z reszty podanych składników.",
            "Smaż kurczaka na patelni aż będzie złocisty.",
            "Wylej nadmiar oleju i dodaj sos, zagotuj.",
            "Połącz kurczaka z sosem i chwilę smaż.",
            "Podawaj z ryżem, posyp sezamem."
        ]
    },
    "burger-z-kurczakiem": {
        id: "burger-z-kurczakiem",
        title: "Burger z Kurczakiem",
        tags: ["Fast food", "Mięso", "Łatwe", "40-99 zł"],
        timeFilter: "short",
        difficultyFilter: "easy",
        costFilter: "medium",
        time: "30 minut",
        portions: "2",
        image: "chicken_burger.jpeg",
        ingredients: [
            "2 bułki",
            "1 kotlet z kurczaka",
            "Sałata",
            "Majonez",
            "Czarny sezam do dekoracji"
        ],
        instructions: [
            "Usmaż kotlet z kurczaka na złoty kolor.",
            "Przekrój bułki na pół i podgrzej je w piekarniku.",
            "Nałóż na bułki majonez, sałatę i usmażony kotlet.",
            "Podawaj z ulubionymi dodatkami."
        ]
    },
    bread: {
        id: "bread",
        title: "Domowy Chleb",
        tags: ["Wypieki", "Pieczywo", "Średnie", "0-39 zł"],
        timeFilter: "long",
        difficultyFilter: "medium",
        costFilter: "cheap",
        time: "2 godziny",
        portions: "1 bochenek",
        image: "bread.jpeg",
        ingredients: [
            "500g mąki",
            "300ml wody",
            "7g suchych drożdży",
            "1 łyżeczka soli",
            "1 łyżeczka cukru"
        ],
        instructions: [
            "Wymieszaj drożdże z wodą i cukrem, odstaw na 10 minut.",
            "Dodaj mąkę i sól, wyrabiaj ciasto.",
            "Odstaw ciasto do wyrośnięcia na 1 godzinę.",
            "Piecz w piekarniku w temperaturze 200°C przez 40 minut."
        ]
    }
};
