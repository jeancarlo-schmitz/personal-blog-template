import divIdMapping from "../../utils/divIdMapping.js";
import config from "../../utils/config.js";

const mainHandler = {};

mainHandler.goToHome = function () {
    window.location = config.links.host + '#/';
}

mainHandler.isDashboardPageVisible = function () {
    return $("#" + divIdMapping.pages.dashboard.id).is(':visible');
};

mainHandler.isCaixaEntradaPageVisible = function () {
    return $("#" + divIdMapping.pages.caixa_entrada.id).is(':visible');
};

mainHandler.isFiltroPageVisible = function () {
    return $("#" + divIdMapping.pages.filtro.id).is(':visible');
};

mainHandler.isAdicionarClientePageVisible = function () {
    return $("#" + divIdMapping.pages.cliente.id).is(':visible');
};

mainHandler.isAdicionarProcessoPageVisible = function () {
    return $("#" + divIdMapping.pages.processo.id).is(':visible');
};

mainHandler.isHomePageVisible = function () {
    return $("#" + divIdMapping.pages.home.id).is(':visible');
};

mainHandler.isTipoRecebimentoPageVisible = function () {
    return $("#" + divIdMapping.pages.tipo_recebimento.id).is(':visible');
};

mainHandler.is404PageVisible = function () {
    return $("#" + divIdMapping.pages.notFound.id).is(':visible');
};

export default mainHandler;