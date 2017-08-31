export
default class indexModel {
    constructor(ctx) {}
    getData() {
        const _promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                        userId: 1,
                        id: 1,
                        title: "石家庄",
                        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
                    }, {
                        userId: 1,
                        id: 2,
                        title: "郑州",
                        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
                    }, {
                        userId: 1,
                        id: 3,
                        title: "西安",
                        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
                    }, {
                        userId: 1,
                        id: 4,
                        title: "太原",
                        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
                    }, {
                        userId: 1,
                        id: 5,
                        title: "济南",
                        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
                    }, {
                        userId: 1,
                        id: 6,
                        title: "兰州",
                        body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
                    }, {
                        userId: 1,
                        id: 7,
                        title: "沈阳",
                        body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
                    }, {
                        userId: 1,
                        id: 8,
                        title: "长春",
                        body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
                    }, {
                        userId: 1,
                        id: 9,
                        title: "哈尔滨",
                        body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
                    }, {
                        userId: 1,
                        id: 10,
                        title: "昆明",
                        body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
                    }]
                );
            }, 1000);
        });
        return _promise;
    }
}