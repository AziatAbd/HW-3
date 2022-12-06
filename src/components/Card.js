import './Card.css'

const user = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 2,
    id: 2,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 3,
    id: 3,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
];
function Card() {
  return (
    <div>
      {user.map((el) => {
        return (
          <div className='container'>
            <p>{el.id}</p>
            <img src={el.url} alt="" />
            <span>{el.title}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
