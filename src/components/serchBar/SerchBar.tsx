import { useFormik } from "formik";
import { useWether } from "../../contex/wetherContex";
import style from './serchBar.module.css'
export default function SerchBar() {
  const { setWetherData, addToHistory } = useWether();

  const fetchWeather = async (cityName: string) => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=37f859bf29fc2bc5da76bc1c663d4da7`
    );

    const data = await result.json();
    setWetherData(data);
    addToHistory(data);
    console.log(data);
  };

  const formik = useFormik({
    initialValues: { cityName: "" },
    onSubmit: (values) => {
      console.log(values);

      fetchWeather(values.cityName);
    },
  });

  return (
    <div>
      <form  className={style.formContainer} onSubmit={formik.handleSubmit}>
        <input className={style.inputContainer}
          onChange={formik.handleChange}
          type="text"
          name="cityName"
          placeholder=""
          value={formik.values.cityName}
        />
        <button type="submit">Get</button>
      </form>
    </div>
  );
}
