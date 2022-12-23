var sum_to_n_a = function(n) {
    return (n*(n+1))/2;
};

var sum_to_n_b = function(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
};

var sum_to_n_c = function(n) {
    if (n == 0) {
        return n;
    } else {
        return n + sum_to_n_c(n-1);
    }
};