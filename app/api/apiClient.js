const apiClient = {};

apiClient.post = function(url, dados = false) {
    return new Promise((resolve, reject) => {
        let ajaxOptions = {
            url: url,
            type: 'POST',
            async: true,
            crossDomain: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
            },
            success: resolve,
            error: reject
        };

        if (dados) {
            ajaxOptions.data = dados;
        }

        $.ajax(ajaxOptions);
    }).catch(error => {
        return error.responseJSON;
    });
};

apiClient.get = function(url, dados = false) {
    if (dados) {
        dados = apiClient.transformaArrayEmURLSearchParams(dados);
        let params = new URLSearchParams(dados);
        url += '?' + params.toString();
    }

    return new Promise((resolve, reject) => {
        let ajaxOptions = {
            url: url,
            type: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
            },
            success: resolve,
            error: reject
        };

    $.ajax(ajaxOptions);
}).catch(error => {
        return error.responseJSON;
});
};

apiClient.delete = function(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
            },
            success: resolve,
            error: reject
        });
    }).catch(error => {
        return error.responseJSON;
});
};

apiClient.put = function(url, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
            },
            data: data,
            success: resolve,
            error: reject
        });
    }).catch(error => {
        return error.responseJSON;
});
};

apiClient.transformaArrayEmURLSearchParams = function (array) {
    let params = new URLSearchParams();

    for (let key in array) {
        params.append(key, array[key]);
    }

    return params;
};

export default apiClient;