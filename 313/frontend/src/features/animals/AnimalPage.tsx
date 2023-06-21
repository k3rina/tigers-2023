import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StateContext from '../../context';

function AnimalPage(): JSX.Element {
  const { animalId } = useParams();
  const navigate = useNavigate();

  const { state } = useContext(StateContext);
  let animal;
  if (animalId) {
    animal = state.animals.find((anim) => anim.id === +animalId);
  }

  const error = <h1>Такого животного нет</h1>;

  const content = (
    <>
      <h3>{animal?.name}</h3>
      <img className="animal-page__img" src={animal?.image} alt="animal" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab sed quos quidem. Eaque
        maxime voluptas praesentium totam. Quidem, ut perspiciatis unde aliquid assumenda optio
        repellendus porro cumque repellat nihil repudiandae deleniti impedit reiciendis maiores quos
        explicabo fuga quas tempore atque corrupti? Unde, saepe perferendis. Inventore vitae rerum
        minima odio error voluptas libero distinctio eos quo, modi quibusdam, numquam delectus
        recusandae, nam culpa fuga aliquid repellat eligendi labore a corrupti ullam dolor nobis
        necessitatibus? Quo exercitationem officia harum fugit necessitatibus corrupti quidem
        nesciunt repellat magnam laborum sed est, earum dignissimos maxime ab ipsam provident ut
        ullam ipsa quae deleniti error!
      </p>
      <button onClick={() => navigate(-1)} type="button">
        Назад к няшкам
      </button>
    </>
  );

  return <div className="animal-page__container">{!animal ? error : content}</div>;
}

export default AnimalPage;
