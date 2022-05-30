function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let standartCounter = 0;
    let studentCounter = 0;
    let kidCounter = 0;
    let totalTicketCounter = 0;



    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;


        let ticketCounter = 0;
        let ticketType = input[index]
        index++;
        while (ticketType !== "End") {
            ticketCounter++;
            switch (ticketType) {
                case "standard": standartCounter++; break;
                case "student": studentCounter++; break;
                case "kid": kidCounter++; break;
            }
            if (ticketCounter >= freeSpace) {
                break;
            }
            ticketType = input[index];
            index++;

        }
        totalTicketCounter += ticketCounter;
        let result = (ticketCounter / freeSpace * 100);
        console.log(`${name} - ${result.toFixed(2)}% full.`);
        command = input[index];
        index++;

    }
    let studentTicketCounter = studentCounter / totalTicketCounter * 100;
    let standartTicket = standartCounter / totalTicketCounter * 100;
    let kidTickedCounter = kidCounter / totalTicketCounter * 100;

    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${studentTicketCounter.toFixed(2)}% student tickets.`);
    console.log(`${standartTicket.toFixed(2)}% standard tickets.`);
    console.log(`${kidTickedCounter.toFixed(2)}% kids tickets.`)
}