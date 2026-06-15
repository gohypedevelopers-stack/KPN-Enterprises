import React, { useState } from "react";
import { Search, Info, FileSpreadsheet } from "lucide-react";
import { SOLUTIONS_MATRIX } from "../data";

export default function SolutionsMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string>("All");

  const folders = [
    "All",
    "Pharma & Sterile",
    "Food & Beverage",
    "Automotive & Heavy",
    "IT & Electronics",
    "Warehouses & Labs",
  ];

  // Map categorizations down to keyword descriptors
  const matchesFolder = (itemCases: string, folder: string): boolean => {
    if (folder === "All") return true;
    const cases = itemCases.toLowerCase();
    
    if (folder === "Pharma & Sterile") {
      return cases.includes("pharma") || cases.includes("hospital") || cases.includes("sterile") || cases.includes("cleanrooms");
    }
    if (folder === "Food & Beverage") {
      return cases.includes("food") || cases.includes("dairy") || cases.includes("brewery") || cases.includes("kitchens") || cases.includes("beverage");
    }
    if (folder === "Automotive & Heavy") {
      return cases.includes("automobile") || cases.includes("heavy") || cases.includes("engineering") || cases.includes("industrial") || cases.includes("workshops");
    }
    if (folder === "IT & Electronics") {
      return cases.includes("server") || cases.includes("electronics") || cases.includes("semiconductor") || cases.includes("data");
    }
    if (folder === "Warehouses & Labs") {
      return cases.includes("warehouse") || cases.includes("logistics") || cases.includes("loading") || cases.includes("labs");
    }
    return true;
  };

  const filteredMatrix = SOLUTIONS_MATRIX.filter((item) => {
    const textMatch =
      item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cases.toLowerCase().includes(searchTerm.toLowerCase());
    
    const folderMatch = matchesFolder(item.cases, selectedFolder);
    
    return textMatch && folderMatch;
  });

  return (
    <section id="matrix" className="py-24 bg-editorial-bg text-editorial-ink relative border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center space-y-3 max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-editorial-beige border border-editorial-border text-editorial-accent rounded-full text-[10px] font-bold uppercase tracking-widest">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Selection Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
            Industrial <span className="not-italic font-semibold">Flooring Selection Matrix</span>
          </h2>
          <p className="text-xs sm:text-sm text-editorial-dark-gray max-w-2xl mx-auto leading-relaxed font-semibold">
            Recreated from Page 9 of KPN Enterprises&apos; official technical guidelines, matching specialized coating solutions with recommended industries and precise architectural use cases.
          </p>
        </div>

        {/* Matrix search filters */}
        <div className="bg-white border border-editorial-border rounded-xl p-5 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Folders filters */}
          <div className="flex flex-wrap gap-1.5 justify-start w-full md:w-auto">
            {folders.map((folder) => (
              <button
                key={folder}
                onClick={() => setSelectedFolder(folder)}
                className={`px-3.5 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                  selectedFolder === folder
                    ? "bg-editorial-ink text-white shadow-sm"
                    : "bg-editorial-cream hover:bg-editorial-beige text-editorial-dark-gray border border-editorial-border"
                }`}
              >
                {folder}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search treatments, use cases, keywords..."
              className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-dark-gray focus:border-editorial-accent rounded-lg pl-9 pr-4 py-2 text-xs focus:outline-none placeholder-editorial-muted text-editorial-ink font-medium"
            />
            <Search className="w-4 h-4 text-editorial-muted absolute left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* Interactive Matrix List wrapper */}
        <div className="bg-white border border-editorial-border rounded-xl overflow-hidden shadow-sm relative">
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-editorial-cream border-b border-editorial-border">
                  <th className="py-4 px-6 text-xs font-extrabold text-editorial-ink uppercase tracking-widest w-1/3 selection:bg-none">
                    Product / Coating System
                  </th>
                  <th className="py-4 px-6 text-xs font-extrabold text-editorial-accent uppercase tracking-widest w-2/3 selection:bg-none">
                    Recommended Industries & Use Cases
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-editorial-border">
                {filteredMatrix.length > 0 ? (
                  filteredMatrix.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-editorial-cream/45 transition-colors duration-150"
                    >
                      <td className="py-5 px-6 font-bold text-editorial-ink text-xs sm:text-sm uppercase tracking-wide">
                        {item.product}
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex flex-wrap gap-1.5">
                          {item.cases.split(",").map((useCase, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] sm:text-xs font-bold uppercase bg-editorial-cream hover:bg-white text-editorial-dark-gray hover:text-editorial-ink border border-editorial-border px-2.5 py-1 rounded transition duration-150 select-none"
                            >
                              {useCase.trim()}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="py-12 text-center text-xs text-editorial-muted">
                      <div className="flex flex-col items-center gap-3">
                        <Info className="w-8 h-8 text-editorial-muted" />
                        <span className="font-semibold uppercase tracking-wider text-[11px]">No records matching search criteria.</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table footer metadata */}
          <div className="bg-editorial-cream px-6 py-4 border-t border-editorial-border flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-editorial-muted font-bold uppercase tracking-widest">
            <span>Displaying {filteredMatrix.length} of {SOLUTIONS_MATRIX.length} technical treatments</span>
            <div className="flex items-center gap-1.5 text-editorial-accent">
              <span>All specifications laid under supervision of certified chemists</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
