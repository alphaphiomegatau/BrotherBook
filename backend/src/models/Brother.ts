import mongoose, { Document, Schema } from 'mongoose';

export interface IPosition extends Document {
    title: string;
    year: number;
    semester: string;
    coHolders?: Schema.Types.ObjectId[];
}

const PositionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    coHolders: [Schema.Types.ObjectId],
});

export interface IBrother extends Document {
    brotherNumber?: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    nickname?: string;
    pledgeClass?: string;
    family?: string;
    positions?: IPosition[];
    ancestors?: Schema.Types.ObjectId[];
    parents?: {};
}

const BrotherSchema = new Schema({
    brotherNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: String,
    lastName: {
        type: String,
        required: true,
    },
    nickname: String,
    pledgeClass: String,
    family: String,
    positions: [PositionSchema],
    ancestors: [Schema.Types.ObjectId],
    parents: [{
        parentId: Schema.Types.ObjectId,
        level: Number,
    }],
}, {
    timestamps: true,
});

export default mongoose.model<IBrother>('Brother', BrotherSchema);
