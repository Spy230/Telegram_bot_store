import React, { useState } from 'react';
import './Form.css'; // Подключаем стили

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Обновленный обработчик отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://95.24.119.251:3001/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result =  await response.json();
                console.log('Данные успешно отправлены:', result);
                alert('!Данные успешно отправлены!!!');
            } else {
                console.error('Ошибка при отправке данных:', response.statusText);
                alert('Ошибка при отправке данных!');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при соединении с сервером!');
        }
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
