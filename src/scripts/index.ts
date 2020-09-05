import { Program } from "./program";

Program.main(window.location.search.substring(1).split(/(\&|=)/));