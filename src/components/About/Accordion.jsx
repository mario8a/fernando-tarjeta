import { useState } from "react";

export const Accordion = () => {
  const [itemSelected, setItemSelected] = useState(null);

  const toggle = (index) => {
    if (itemSelected === index) {
      return setItemSelected(null);
    }

    setItemSelected(index);
  };

  return (
    <div className="wrapper">
      <div className="accordion">

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(1)}>
            <h2>Planes de retiro</h2>
            <span>{itemSelected === 1 ? "-" : "+"}</span>
          </div>
          <div
            className={
              itemSelected === 1
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            <div className="accordion-content__description">
              <p>
                Se da gracias al ahorro hecho a tiempo y además cuenta con beneficios fiscales.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(2)}>
            <h2>Administración de Herencias y Legados</h2>
            <span>{itemSelected === 2 ? "-" : "+"}</span>
          </div>
          <div
            className={
              itemSelected === 2
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            <div className="accordion-content__description">
              <p>
                Los Fideicomisos son una herramienta fabulosa para dispersar los recursos a tu familia y seres queridos. <br />
              </p>
              <p>
                <b>
                Sirven para:
                </b>
              </p>
              <ul>
                <li>- El ahorro realizado</li>
                <li>- Seguro de vida</li>
              </ul>
            </div>            
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(3)}>
            <h2>Fideicomiso para la educación de los hijos</h2>
            <span>{itemSelected === 3 ? "-" : "+"}</span>
          </div>
          <div
            className={
              itemSelected === 3
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            <div className="accordion-content__description">
              <p>
              La mejor herencia que le podemos dar a nuestros hijos es la educación, te ayudamos a garantizarla.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(4)}>
            <h2>Empresarial</h2>
            <span>{itemSelected === 4 ? "-" : "+"}</span>
          </div>
          <div
            className={
              itemSelected === 4
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            <div className="accordion-content__description">
              <ul>
                <li>- Vida Colectivo</li>
                <li>- Gastos Médicos Colectivo</li>
                <li>- Flotilla de Autos</li>
                <li>- Intersocios</li>
                <li>- Hombre Clave</li>
                <li>- Daños y Responsabilidad Civil</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(5)}>
            <h2>Planes de inversión</h2>
            <span>{itemSelected === 5 ? "-" : "+"}</span>
          </div>
          <div
            className={
              itemSelected === 5
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            <div className="accordion-content__description">
              <p>
                Amplia gama de fondos de inversión con los mejores administradores tanto locales como internacionales.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(6)}>
            <h2>Crédito</h2>
            <span>{itemSelected === 6 ? "-" : "+"}</span>
          </div>
          <div
            className={
              itemSelected === 6
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            <div className="accordion-content__description">
              <h3>Casa: </h3>
              <p>Te asesoramos sin costo en la elección del crédito hipotecario mas conveniente para ti, según tu perfil y tus necesidades</p>
              <h3>Empresarial: </h3>
              <p>Crédito dedicado a financiar los proyectos o necesidades para que tu empresa crezca y cumpla tus objetivos.</p>
              <h3>Auto: </h3>
              <p>Te asesoramos sin costo en la elección del crédito de tu auto o sustitución de crédito.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
