
//❌ Bad
import { FC } from "react";

// complies to...

import {} from "react";

//? Without the import type the import sticks around



//❌ Bad
import  { type FC as semiFC } from "react";

// complies to...

//? Using the import type means that only named import will be removed



//✅ Good
import type { FC as bestFC } from "react";

//? Is removed entirely