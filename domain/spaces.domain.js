const spaceType = {
    MEETING_ROOM: 'meeting_room',
    DESK: 'desk',
    PRIVATE_OFFICE: 'private_office',
    COMMON_AREA: 'common_area',

};

const spaceStatus= {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    UNDER_MAINTENANCE: 'under_maintenance',
   
};


function isActive(space){
    return space.status === spaceStatus.ACTIVE;
}

function CanBeBooked(space){
    return space.status === spaceStatus.ACTIVE && (space.type === spaceType.MEETING_ROOM || space.type === spaceType.DESK);
}

function updateSpaceStatus(space, newStatus){
    return {
        ...space,
        status: newStatus,
        updatedAt: new Date().toISOString()
    };
}

function calculateOccupancyPercentage(space, currentPeople) {
  if (space.capacity === 0) return 0;
  return (currentPeople / space.capacity) * 100;
}

function createSpace({id, name, type,capacity,status}){
    return {
        id,
        name,
        type,
        capacity,
        status: status || spaceStatus.ACTIVE,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
}

export {
    spaceType,
    spaceStatus,
    isActive,
    CanBeBooked,
    updateSpaceStatus,
    calculateOccupancyPercentage,
    createSpace,
}