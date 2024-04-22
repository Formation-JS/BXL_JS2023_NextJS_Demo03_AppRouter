const PersonTableHead = ({ withAction }) => (
    <thead>
        <tr>
            <th>Prénom</th>
            <th>Nom</th>
            {withAction && (
                <th></th>
            )}
        </tr>
    </thead>
);

const PersonTableRow = ({ firstname, lastname, action }) => (
    <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        {!!action && (
            <td>{action()}</td>
        )}
    </tr>
);

const PersonTable = ({ people }) => {

    return (
        <table>
            <PersonTableHead withAction={people.includes(p => p.action)} />
            <tbody>
                {people.map(person => (
                    <PersonTableRow {...person} key={person.id} />
                ))}
            </tbody>
        </table>
    )
}

export default PersonTable;