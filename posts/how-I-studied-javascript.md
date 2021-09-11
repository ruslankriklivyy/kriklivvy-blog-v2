---
id: '1'
slug: 'how-i-learend-javascript'
title: 'Как я изучил JavaScript'
date: '11.09.2021'
poster: '51444542302_25f94394b7_b.jpg'
category: 'Программирование'
description: 'Расскажу о том как я будучи гуманитарием изучил язык программирования JavaScipt. Полезные ссылки прилагаються.'
---

<pre>
  <code class="language-js">
    function getUserCity() {
      return new Promise((resolve, reject) => {
        fetch('https://api.ipify.org?format=json')
          .then(res => res.json())
          .then(({ ip }) => {
            fetch(
              `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}&token=ВАШ_ТОКЕН_ДАДАТА`
            )
          .then(res => res.json())
          .then(json => {
            if (
              {}.hasOwnProperty.call(json, 'family') &&
              json.family.toLowerCase().indexOf('err')
            ) {
              return reject(json);
            }
            const {
              location: {
                data: { city },
              },
            } = json;
            resolve({ city, ip });
          });
        });
    });
}

getUserCity()
  .then(({ city, ip }) => {
    console.log(city, ip);
  })
  .catch(err => {
    console.log(err);
  });
  </code>
</pre>
