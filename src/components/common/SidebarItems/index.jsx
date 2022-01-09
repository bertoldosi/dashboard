import styles from "./styles.module.scss";

const Card = ({ cards }) => {
  return cards.map((card) => (
    <ul key={card.id} className={styles.ContainerCardContent}>
      <div>
        <i className={card.icon}></i>
        <span>{card.label}</span>
      </div>

      <li>
        {card?.items.map((item, index) => (
          <a key={index} href={item.href}>
            {item.label}
          </a>
        ))}
      </li>
    </ul>
  ));
};

function SidebarItems({ sidebarItems }) {
  return (
    <section className={styles.Container}>
      {sidebarItems.map((sidebarItem, i) => (
        <div key={i} className={styles.ContainerCard}>
          <span className={styles.ContainerCardTitle}>{sidebarItem.label}</span>
          <Card cards={sidebarItem.cards} />
        </div>
      ))}
    </section>
  );
}

export default SidebarItems;
