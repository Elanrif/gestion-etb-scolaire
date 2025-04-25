'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

// Define the option type
export interface Option {
    value: string;
    label: string;
}

interface MultiSelectDropdownProps {
    placeholder?: string;
    options?: Option[];
    defaultSelected?: Option[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setData: any;
    onChange?: (selected: Option[]) => void;
}

export default function MultiSelectDropdown({
    placeholder = 'Options',
    options = [],
    defaultSelected = [],
    onChange,
    setData,
}: MultiSelectDropdownProps) {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>(defaultSelected);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleOptionSelect = (option: Option): void => {
        const newSelectedOptions = selectedOptions.some((selectedOption) => selectedOption.value === option.value)
            ? selectedOptions.filter((o) => o.value !== option.value)
            : [...selectedOptions, option];

        const mapOptions = newSelectedOptions.map((newOption) => Number(newOption.value));
        setSelectedOptions(newSelectedOptions);
        setData('profIds', mapOptions);
        onChange?.(newSelectedOptions);
    };

    const handleRemoveOption = (option: Option): void => {
        const newSelectedOptions = selectedOptions.filter((o) => o.value !== option.value);

        const mapOptions = newSelectedOptions.map((newOption) => Number(newOption.value));
        setSelectedOptions(newSelectedOptions);
        setData('profIds', mapOptions);
        onChange?.(newSelectedOptions);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            <span>{selectedOptions.length > 0 ? `${selectedOptions.length} selected` : placeholder}</span>
                            <ChevronDownIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[400px] p-4">
                        <div className="flex flex-col gap-4">
                            <Input
                                type="search"
                                placeholder="Search options..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                            />
                            <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto">
                                {filteredOptions.map((option) => (
                                    <div key={option.value} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id={option.value}
                                                checked={selectedOptions.some((selectedOption) => selectedOption.value === option.value)}
                                                onCheckedChange={() => handleOptionSelect(option)}
                                            />
                                            <Label htmlFor={option.value} className="font-normal">
                                                {option.label}
                                            </Label>
                                        </div>
                                    </div>
                                ))}
                                {filteredOptions.length === 0 && (
                                    <div className="text-muted-foreground py-2 text-center text-sm">No options found</div>
                                )}
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {selectedOptions.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="font-medium">Options selectionnées :</div>
                    <div className="flex flex-wrap gap-2">
                        {selectedOptions.map((option) => (
                            <div
                                key={option.value}
                                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800"
                            >
                                {option.label}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemoveOption(option)}
                                    type="button"
                                    aria-label={`Remove ${option.label}`}
                                >
                                    <XIcon className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type
interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
