function main(arr) {

    let heroes = [];

    for (let heroInfo of arr) {
        let [name, level, items] = heroInfo.split(' / ');

        let currentHero = {
            name: name,
            level: Number(level),
            items: items,
        };
        heroes.push(currentHero);
    }
    let sortedByLevel = heroes.sort((a, b) => {
        return a.level - b.level;
    });

    for (const hero of sortedByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}