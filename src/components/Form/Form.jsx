import React, { useState } from 'react';
import './Form.css'; // Подключаем стили

const Form = () => {
    // Используем хуки для управления состоянием полей формы
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
    });

    // Функция для обработки изменений в полях формы
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Функция для обработки отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно добавить логику отправки данных на сервер
        console.log('Данные формы:', formData);
    };

    return (
        <div className="form-container">
            <h2>Заполните анкету</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Form;
