function validateRut(rut){
    const cleanRut = rut.replace(/[.-]/g, '');

    if (cleanRut.length < 8 || cleanRut.length > 9){
        return false;
    }
    const checkDigit = cleanRut.slice(-1).toUpperCase();
    if (!/^[0-9K]$/.test(checkDigit)){
        return false;
    }
    return true;
}

function updateContact(company, email, phone){
    return{
        ...company,
        email,
        phone,
        updatedAt: new Date().toISOString()
    };
}

function formatRut(rut){
    const cleanRut = rut.replace(/[.-]/g, '');

    if(cleanRut.length == 8){
        return `${cleanRut.slice(0, 1)}.${cleanRut.slice(1, 4)}.${cleanRut.slice(4, 7)}-${cleanRut.slice(7)}`;

    }
    return rut;
}

function getEmailDomain(company) {
  const parts = company.email.split('@');
  return parts.length === 2 ? parts[1] : '';
}

function createCompany({ id, name, rut, email, phone, address }) {
  return {
    id,
    name,
    rut,
    email,
    phone,
    address: address || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export{
    validateRut,
    updateContact,
    formatRut,
    createCompany,
    getEmailDomain
}