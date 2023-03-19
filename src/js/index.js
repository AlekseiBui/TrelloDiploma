'use strict'

import { createHeader } from "./components/header";
import { createThreeTabs } from "./components/threeTabs";

document.body.append(createHeader(), createThreeTabs())
