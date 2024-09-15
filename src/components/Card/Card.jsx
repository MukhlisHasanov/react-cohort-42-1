import './styles.css';

/* 
Создайте компонент "Card" в папке "components". В нем нужно создать карточку с информацией о вымышленном пользователе Гомере Симпсоне:

аватар
имя и фамилия
род деятельности
хобби
Верстка и стили на ваше усмотрение. Писать нужно на React, используя изученный на лекции синтаксис jsx. 
Затем нужно импортировать компонет Card в компонент Homework02, где переиспользовать его 3 раза. В App.jsx отобразить компонент Homework02.
*/

function Card() {
    const user = {
        firstName: "Homer",
        lastName: "Simpson",
        job: "Nuclear Safety Inspector",
        hobbies: "Eating, watching TV, and drinking beer",
        avatarURL:
        "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_1200/v1713447975/blog-post-open-graph-covers/000/013/111/13111-original.jpg?1713447975",
    };

    const getFullName = () => {
        return `${user.firstName} ${user.lastName}`
      }

      return (
        <div className='card-container'>
                <p className='card-info'>User Card</p>
                <img className='avatar' src={user.avatarURL} alt="User Avatar" />
                <p className='card-info'>Full Name: {getFullName()}</p>
                <p className='card-info'>Job: {user.job}</p>
                <p className='card-info'>Hobbies: {user.hobbies}</p>
            </div>
        
      );
}

export default Card;