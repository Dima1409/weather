import React from 'react';
import { Value, Main, Desc } from './City.styled';

const City = ({ results }) => {
  const { name, main, sys, weather, wind } = results;
  if (weather[0].description === 'рвані хмари') {
    weather[0].description = 'мінлива хмарність';
  }
  return (
    <>
      {results && (
        <Main>
          <Desc>
            Ваше місто:{' '}
            <Value>
              {name}({sys.country})
            </Value>
          </Desc>
          <Desc>
            Температура повітря, &deg;C:{' '}
            <Value>{(main.temp - 273.15).toFixed(1)}</Value>
            {/* {main.temp>10 && <p>тепло</p>} */}
          </Desc>
          <Desc>
            Атмосферний тиск, мм: <Value>{main.pressure} </Value>
          </Desc>
          <Desc>
            Вологість повітря, %: <Value>{main.humidity}</Value>
          </Desc>
          <Desc>
            Погода: <Value>{weather[0].description}</Value>
          </Desc>
          <Desc>
            Швидкість вітру, м/с: <Value>{wind.speed}</Value>
          </Desc>
        </Main>
      )}
    </>
  );
};

export default City;
