import filtros from './filtros.json'
import styles from './Filtros.module.scss';

export default function Filtros() {
    type IOopcao = typeof filtros[0];
    function selecionarFiltros(opcao: IOopcao) {}
    return <div className={styles.filtros}>
        {filtros.map((opcao) => (
            <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
                {opcao.label}
            </button>
        ))}
    </div>;
}