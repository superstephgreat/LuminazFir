import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/TechnicianFinder.css';

// Sample technician data
const dummyTechnicians = [
    { id: 1, name: 'John Doe', specialization: 'Solar Panel Installation', location: 'Lagos', rating: 4.8, reviews: 20, pricing: '$50/hour' },
    { id: 2, name: 'Jane Smith', specialization: 'Solar Maintenance', location: 'Abuja', rating: 4.5, reviews: 15, pricing: '$40/hour' },
    { id: 3, name: 'Mike Johnson', specialization: 'Solar Panel Installation', location: 'Port Harcourt', rating: 4.7, reviews: 18, pricing: '$55/hour' },
];

const TechnicianFinder = () => {
    const [filters, setFilters] = useState({
        location: '',
        specialization: '',
        name: '',
        rating: '',
    });
    const [filteredTechnicians, setFilteredTechnicians] = useState(dummyTechnicians);
    const [selectedTechnician, setSelectedTechnician] = useState(null);

    // Use useEffect to apply the filters whenever they change
    useEffect(() => {
        setFilteredTechnicians(dummyTechnicians.filter((technician) => {
            return (
                (filters.location === '' || technician.location.toLowerCase().includes(filters.location.toLowerCase())) &&
                (filters.specialization === '' || technician.specialization.toLowerCase().includes(filters.specialization.toLowerCase())) &&
                (filters.name === '' || technician.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (filters.rating === '' || technician.rating >= parseFloat(filters.rating))
            );
        }));
    }, [filters]);

    // Update filters as the user types in the input fields
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="technician-finder">
            <h2>Find Technicians</h2>
            <div className="search-bar">
                <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={filters.location}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="specialization"
                    placeholder="Enter specialization"
                    value={filters.specialization}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={filters.name}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Min rating"
                    value={filters.rating}
                    onChange={handleFilterChange}
                    min="0"
                    max="5"
                    step="0.1"
                />
            </div>

            {/* Technician List */}
            <div className="technician-list">
                {filteredTechnicians.length > 0 ? (
                    filteredTechnicians.map((technician) => (
                        <div key={technician.id} className="technician-card">
                            <h3>{technician.name}</h3>
                            <p><strong>Specialization:</strong> {technician.specialization}</p>
                            <p><strong>Location:</strong> {technician.location}</p>
                            <p><strong>Rating:</strong> {technician.rating}⭐</p>
                            <button onClick={() => setSelectedTechnician(technician)}>View Profile</button>
                        </div>
                    ))
                ) : (
                    <p>No technicians found with the given criteria.</p>
                )}
            </div>

            {/* Technician Profile Modal */}
            {selectedTechnician && (
                <Modal
                    isOpen={!!selectedTechnician}
                    onRequestClose={() => setSelectedTechnician(null)}
                    className="modal"
                >
                    <h2>{selectedTechnician.name}</h2>
                    <p><strong>Specialization:</strong> {selectedTechnician.specialization}</p>
                    <p><strong>Location:</strong> {selectedTechnician.location}</p>
                    <p><strong>Rating:</strong> {selectedTechnician.rating}⭐</p>
                    <p><strong>Reviews:</strong> {selectedTechnician.reviews}</p>
                    <p><strong>Pricing:</strong> {selectedTechnician.pricing}</p>
                    <button onClick={() => alert('Booking confirmed!')}>Book Service</button>
                    <button onClick={() => setSelectedTechnician(null)}>Close</button>
                </Modal>
            )}
        </div>
    );
};

export default TechnicianFinder;
