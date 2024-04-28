import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import SearchListModal from "./SearchListModal";

const liquorEmojis = ["🍸", "🍹", "🥃", "🍺", "🍶", "🍾", "🍷", "🥂"];
const getRandomEmoji = () => {
  return liquorEmojis[Math.floor(Math.random() * liquorEmojis.length)];
};

function SearchList({ data, searchTerm, setGlobalState }) {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const formulas = data ? data.formulas : [];

  const filteredFormulas = formulas.filter((formula) => {
    const name = formula.name.toLowerCase();

    // This ensures that if the search term is an array to join it into a string to avoid the error of .includes() and .toLowerCase() not being a function.
    const term = Array.isArray(searchTerm)
      ? searchTerm.join(" ").toLowerCase()
      : searchTerm.toLowerCase();
    return name.includes(term);
  });

  // This function will open the modal and set the selected formula
  const handleOpenModal = (formula) => {
    setSelectedFormula(formula);
    setOpenModal(true);
  };

  return (
    <Paper
      style={{
        maxHeight: "calc(100vh - 250px)",
        overflow: "auto",
        padding: "16px",
        border: "1px solid #ccc",
        marginTop: "15px",
        marginBottom: "20px",
      }}
    >
      <Box
        style={{
          height: "100%",
          overflowY: "auto",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        {/* This will dynamically update the list for the formulas as the user inputs keys */}
        {filteredFormulas.length === 0 && !searchTerm ? (
          <Typography variant="body1" onClick={() => handleOpenModal(data)}>
            Start typing to search.
          </Typography>
        ) : filteredFormulas.length === 0 ? (
          <Typography variant="body1">No results found.</Typography>
        ) : (
          <div>
            {filteredFormulas.map((formula, index) => (
              <Typography
                key={index}
                variant="body1"
                style={{ cursor: "pointer", fontSize: "22px" }}
                onClick={() => handleOpenModal(formula)}
              >
                {formula.name} {getRandomEmoji()}
              </Typography>
            ))}
          </div>
        )}
      </Box>

      {/* Once a formula is clicked the modal will be triggered to open */}
      {selectedFormula && (
        <SearchListModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={selectedFormula}
        onConcoct={(formula) => {
          setSelectedFormula(null);
          setOpenModal(false);
          setGlobalState(formula);
        }}
      />
      )}
    </Paper>
  );
}

export default SearchList;
